// src/__tests__/09_redux_test/02_TodoList.test.js
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import TodoList from '../../components/TodoList';
import todoReducer from '../../store/todoSlice';

test('renders todos from Redux store', () => {
  // 스토어의 초기 상태를 설정합니다.
  const preloadedState = {
    todos: {
      items: [
        { id: 1, text: 'Learn Redux Toolkit' },
        { id: 2, text: 'Learn Jest' },
      ]
    },
  };

  // Redux Toolkit을 사용해 스토어를 설정합니다.
  const store = configureStore({
    reducer: { todos: todoReducer },
    preloadedState,
  });

  // Redux Provider로 컴포넌트를 감싸고 렌더링합니다.
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  // Redux 상태에서 할 일이 올바르게 렌더링되는지 확인합니다.
  expect(screen.getByText('Learn Redux Toolkit')).toBeInTheDocument();

  // 모든 li 요소가 2개 렌더링되었는지 확인합니다.
  const listItems = screen.getAllByRole('listitem');
  expect(listItems).toHaveLength(2);
  
});
