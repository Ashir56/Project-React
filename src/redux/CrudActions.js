import { createAsyncThunk } from '@reduxjs/toolkit';
import { del, get, post, put } from '../axios/axios';
const base_url = 'http://localhost:8000/api/v1';
export const getAllTodosAction = createAsyncThunk(
  'users/update',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await get(`${base_url}/get-all-notes`);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const registerTodoAction = createAsyncThunk(
  'users/registerTodo',
  async (userData, { rejectWithValue }) => {
    try {
      const { values, callback } = userData;
      const response = await post(`${base_url}/create-note`, values);
      callback();
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateTodoAction = createAsyncThunk(
  'users/updateTodo',
  async (userData, { rejectWithValue }) => {
    try {
      const { id, data, callback } = userData;
      const response = await put(`${base_url}/update-note?id=${id}`, data);
      callback();
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteTodoAction = createAsyncThunk(
  'users/deleteTodo',
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const response = await del(`${base_url}/delete-note?id=${id}`);
      dispatch(getAllTodosAction());
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
