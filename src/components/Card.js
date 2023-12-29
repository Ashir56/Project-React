import React, { useState } from 'react';
import ModifyModal from './modal/ModifyModal';
import { useDispatch } from 'react-redux';
import { deleteTodoAction } from '../redux/CrudActions';

const Card = ({ title, description, id }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleDelete = () => {
    dispatch(deleteTodoAction(id));
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #BFBFBF30',
          color: 'white',
          borderRadius: '16px',
          padding: '2rem 1rem 1rem',
          gap: '1rem'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p style={{ margin: 0 }}>{title}</p>
          <p style={{ margin: 0 }}>{description}</p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            width: '100%'
          }}
        >
          <button
            onClick={handleDelete}
            style={{
              fontSize: '12px',
              backgroundColor: '#275D7120',
              color: 'whitesmoke',
              borderRadius: '16px',
              padding: '8px 16px',
              border: 'none',
              width: '100%'
            }}
          >
            Delete
          </button>
          <button
            onClick={() => openModal()}
            style={{
              fontSize: '12px',
              backgroundColor: '#E39E36',
              color: 'black',
              borderRadius: '16px',
              padding: '8px 16px',
              border: 'none',
              width: '100%'
            }}
          >
            Modify
          </button>
        </div>
      </div>
      <ModifyModal
        isModalOpen={isModalOpen}
        onClose={closeModal}
        title={title}
        description={description}
        id={id}
      />
    </>
  );
};

export default Card;
