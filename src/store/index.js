// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

// 스토어 구성
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
