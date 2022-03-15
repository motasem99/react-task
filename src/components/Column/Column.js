import React from 'react';
import Card from '../Card/Card';
import { Droppable } from 'react-beautiful-dnd';

const Column = ({ database, addDataToDatabase, formInput }) => {
  const createTask = (color) => {
    addDataToDatabase(color, formInput);
  };
  return (
    <div className='flex justify-around'>
      <Droppable droppableId='red'>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className='bg-slate-300 w-60 min-h-100 mb-8'
          >
            <div className='bg-red-600 w-full p-2 text-center text-white'>
              <button onClick={() => createTask('red')} className='w-full'>
                Add Here
              </button>
            </div>
            {database['red'].list.map((data, index) => (
              <Card
                backgroundColor={'bg-red-600'}
                color={'red'}
                formInput={data}
                index={index}
                key={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId='green'>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className='bg-slate-300 w-60 min-h-100 mb-8'
          >
            <div className='bg-lime-500 w-full p-2 text-center text-white'>
              <button onClick={() => createTask('green')} className='w-full'>
                Add Here
              </button>
            </div>
            {database['green'].list.map((data, index) => (
              <Card
                backgroundColor={'bg-lime-500'}
                formInput={data}
                color={'green'}
                index={index}
                key={index}
              />
            ))}{' '}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId='blue'>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className='bg-slate-300 w-60 min-h-100 mb-8'
          >
            <div className='bg-sky-800 w-full p-2 text-center text-white'>
              <button onClick={() => createTask('blue')} className='w-full'>
                Add Here
              </button>
            </div>
            {database['blue'].list.map((data, index) => (
              <Card
                backgroundColor={'bg-sky-800'}
                formInput={data}
                color={'blue'}
                index={index}
                key={index}
              />
            ))}{' '}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId='black'>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className='bg-slate-300 w-60 min-h-100 mb-8'
          >
            <div className='bg-black w-full p-2 text-center text-white'>
              <button onClick={() => createTask('black')} className='w-full'>
                Add Here
              </button>
            </div>
            {database['black'].list.map((data, index) => (
              <Card
                backgroundColor={'bg-black'}
                formInput={data}
                index={index}
                color={'black'}
                key={index}
              />
            ))}{' '}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
