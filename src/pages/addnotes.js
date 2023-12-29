import React, { useEffect } from 'react';
import Layout from '../layout/index';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { getAllTodosAction, registerTodoAction } from '../redux/CrudActions';

function AddNotes() {
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required')
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      description: ''
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        registerTodoAction({ values, callback: () => formik.resetForm() })
      );
    }
  });

  return (
    <Layout>
      <form onSubmit={formik.handleSubmit}>
        <div
          style={{
            padding: '3rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '250px'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: '36px', color: 'white' }}> Add Note </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #BFBFBF30',
              color: 'white',
              borderRadius: '16px',
              padding: '2rem',
              gap: '2rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '100%'
              }}
            >
              <p style={{ fontSize: '24px', margin: 0 }}> Add Title</p>
              <textarea
                id='title'
                maxLength={1000}
                value={formik.values.title}
                onChange={formik.handleChange}
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
              <p style={{ fontSize: '24px', margin: 0 }}> Add Description</p>
              <textarea
                id='description'
                maxLength={1000}
                value={formik.values.description}
                onChange={formik.handleChange}
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

            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
              <button
                type='submit'
                style={{
                  fontSize: '16px',
                  backgroundColor: '#E39E36',
                  borderRadius: '4px',
                  padding: '8px 16px',
                  border: 'none'
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default AddNotes;
