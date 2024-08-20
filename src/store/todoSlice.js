import { createSlice } from '@reduxjs/toolkit';

// 초기 상태 설정
const initialState = {
  items: [],
};

// 슬라이스 생성
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // 할 일을 추가하는 액션 생성자 및 리듀서
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    // 할 일을 제거하는 액션 생성자 및 리듀서
    removeTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
  },
});

// 액션 생성자와 리듀서를 내보냄
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
