import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTodosAction, updateTodoAction } from '../../redux/CrudActions';

const ModifyModal = ({ isModalOpen, onClose, title, description, id }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: title,
    description: description
  });
  if (isModalOpen !== true) {
    return null;
  }
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const userData = {
      data,
      id,
      callback: () => {
        dispatch(getAllTodosAction());
        onClose();
      }
    };
    dispatch(updateTodoAction(userData));
  };
  return (
    <section className='modal'>
      <article className='modal-content p-lg-4'>
        <main className='modal-mainContents'>
          <form onSubmit={handleSubmit}>
            <div
              style={{
                padding: '3rem 2rem',
                display: 'flex',
                flexDirection: 'column'
                // marginLeft: '250px'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '36px', color: 'white' }}> Add Note </p>
              </div>
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    width: '100%'
                  }}
                >
                  <p style={{ fontSize: '16px', margin: 0, color: '#fff' }}>
                    {' '}
                    Add Title
                  </p>
                  <textarea
                    id='title'
                    maxLength={1000}
                    value={data.title}
                    onChange={(e) =>
                      setData({ ...data, title: e.target.value })
                    }
                    placeholder='Add your title here'
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1rem',
                      backgroundColor: '#041218',
                      color: '#FFFFFF',
                      border: '1px solid #BFBFBF',
                      borderRadius: '8px',
                      resize: 'none',
                      outline: 'none'
                    }}
                  />
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    width: '100%'
                  }}
                >
                  <p
                    style={{
                      fontSize: '16px',
                      margin: '10px 0 0  0',
                      color: '#fff'
                    }}
                  >
                    {' '}
                    Add Description
                  </p>
                  <textarea
                    id='description'
                    maxLength={1000}
                    value={data.description}
                    onChange={(e) =>
                      setData({ ...data, description: e.target.value })
                    }
                    placeholder='Add your description here'
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1rem',
                      backgroundColor: '#041218',
                      color: '#FFFFFF',
                      border: '1px solid #BFBFBF',
                      borderRadius: '8px',
                      resize: 'none',
                      outline: 'none'
                    }}
                  />
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '1rem',
                    justifyContent: 'end'
                  }}
                >
                  <button
                    onClick={onClose}
                    style={{
                      fontSize: '16px',
                      backgroundColor: 'white',
                      borderRadius: '4px',
                      padding: '8px 16px',
                      border: 'none',
                      marginTop: '1rem'
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type='submit'
                    style={{
                      fontSize: '16px',
                      backgroundColor: '#E39E36',
                      borderRadius: '4px',
                      padding: '8px 16px',
                      border: 'none',
                      marginTop: '1rem'
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </main>
      </article>
    </section>
  );
};
export default ModifyModal;
