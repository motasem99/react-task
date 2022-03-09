import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

function Card({ backgroundColor, formInput, color, index }) {
  return (
    <Draggable
      draggableId={`${formInput.title}-${color}-${index}`}
      index={index}
    >
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={`${backgroundColor} m-2 p-2 text-white`}>
            <div>
              <p>title: {formInput.title}</p>
              <p>description: {formInput.description}</p>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
