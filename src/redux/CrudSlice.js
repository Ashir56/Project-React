import { createSlice } from '@reduxjs/toolkit';
import {
  deleteTodoAction,
  getAllTodosAction,
  registerTodoAction,
  updateTodoAction
} from './CrudActions';

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    error: null,
    getAllTodos: [],
    getTodo: null,
    registerTodo: null,
    updaeteTodo: null
  },
  reducers: {},
  extraReducers: (builder) => {
    //** Get all todos */
    builder.addCase(getAllTodosAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllTodosAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.getAllTodos = action.payload;
    });
    builder.addCase(getAllTodosAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //** Register TODO */
    builder.addCase(registerTodoAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerTodoAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.registerTodo = action.payload;
    });
    builder.addCase(registerTodoAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //** Update TODOs */
    builder.addCase(updateTodoAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateTodoAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.updaeteTodo = action.payload;
    });
    builder.addCase(updateTodoAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //** Delete TODOs */
    builder.addCase(deleteTodoAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteTodoAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(deleteTodoAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
