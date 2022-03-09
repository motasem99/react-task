import React from 'react';

const FormData = ({ updateFormInput, formInput }) => {
  return (
    <div>
      <div className='flex justify-center'>
        <div className='w-1/2 flex flex-col pb-12'>
          <input
            placeholder='title'
            name='title'
            id='title'
            value={formInput.title}
            className='mt-8 border rounded p-4'
            onChange={(e) =>
              updateFormInput({ ...formInput, title: e.target.value })
            }
          />
          <textarea
            placeholder='Description'
            name='description'
            id='description'
            className='mt-2 border rounded p-4'
            value={formInput.description}
            onChange={(e) =>
              updateFormInput({ ...formInput, description: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FormData;
