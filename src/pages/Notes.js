import React, { useEffect } from 'react';
import Layout from '../layout';
import Card from '../components/Card';
import { getAllTodosAction } from '../redux/CrudActions';
import { useDispatch, useSelector } from 'react-redux';

const Notes = () => {
  const dispatch = useDispatch();
  const { getAllTodos } = useSelector((state) => state.user);
  const row = getAllTodos?.data;
  console.log({ row });
  const arrayOfObjects = [
    {
      title: 'Object 1',
      description: 'Description for Object 1'
    },
    {
      title: 'Object 2',
      description: 'Description for Object 2'
    },
    {
      title: 'Object 3',
      description: 'Description for Object 3'
    }
    // Add more objects as needed
  ];
  useEffect(() => {
    dispatch(getAllTodosAction());
  }, []);

  return (
    <Layout>
      <div
        style={{
          padding: '3rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '250px'
        }}
      >
        <div>
          <p style={{ fontSize: '36px', color: 'white' }}> My Notes </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1rem'
          }}
        >
          {row?.map((obj, index) => (
            <Card
              key={index}
              title={obj.title}
              description={obj.description}
              id={obj._id}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Notes;
