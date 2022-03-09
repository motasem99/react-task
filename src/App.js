import { useState } from 'react';
import './App.css';
import Column from './components/Column/Column';
import FormData from './components/FormData/FormData';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  const [formInput, updateFormInput] = useState({
    title: '',
    description: '',
  });

  const [database, setDatabase] = useState({
    red: {
      id: 'red',
      list: [],
    },
    green: {
      id: 'green',
      list: [],
    },
    blue: {
      id: 'blue',
      list: [],
    },
    black: {
      id: 'black',
      list: [],
    },
  });

  const onDragEnd = ({ source, destination }) => {
    try {
      // Make sure we have a valid destination
      if (destination === undefined || destination === null) return null;

      // If the source and destination columns are the same
      // AND if the index is the same, the item isn't moving
      if (
        source.droppableId === destination.droppableId &&
        destination.index === source.index
      )
        return null;

      // Set start and end variables
      const start = database[source.droppableId];
      const end = database[destination.droppableId];

      // If start is the same as end, we're in the same column
      if (start.id !== end.id) {
        // Move the item within the list
        // Start by making a new list without the dragged item
        const newList = start.list.filter((_, idx) => idx !== source.index);

        // Then insert the item at the right location

        const anotherList = [...end.list, start.list[source.index]];

        // Then create a new copy of the column object
        const endCol = {
          id: end.id,
          list: anotherList,
        };

        const startCol = {
          id: start.id,
          list: newList,
        };

        // Update the state
        setDatabase((state) => ({
          ...state,
          [startCol.id]: startCol,
          [endCol.id]: endCol,
        }));
        return null;
      }
      return null;
    } catch (err) {
      console.log(err);
    }
  };

  const addDataToDatabase = (color, data) => {
    setDatabase({
      ...database,
      [color]: {
        ...database[color],
        list: [data, ...database[color].list],
      },
    });
  };

  return (
    <div className='App'>
      <FormData updateFormInput={updateFormInput} formInput={formInput} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Column
          database={database}
          addDataToDatabase={addDataToDatabase}
          formInput={formInput}
          setDatabase={setDatabase}
        />
      </DragDropContext>
    </div>
  );
}

export default App;
