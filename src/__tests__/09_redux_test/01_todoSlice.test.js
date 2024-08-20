// src/__tests__/09_redux_test/01_todoSlice.test.js
import todoReducer, { addTodo, removeTodo } from '../../store/todoSlice';

test('should add a new todo', () => {
  const initialState = { items: [] };
  const newTodo = { id: 1, text: 'Learn Redux Toolkit' };

  // addTodo 액션을 리듀서에 전달하여 상태 변경
  const state = todoReducer(initialState, addTodo(newTodo));

  // 상태에 새로운 할 일이 추가되었는지 확인
  expect(state.items).toHaveLength(1);
  expect(state.items[0]).toEqual(newTodo);
  expect(state.items[0].text).toContain('Redux');
});

test('should remove a todo', () => {
  const initialState = { 
    items: [
      { id: 1, text: 'Learn Redux Toolkit' },
      { id: 2, text: 'Learn Typescript' },
      { id: 3, text: 'Learn Jest' },
      { id: 4, text: 'Run classroom!' },
    ] 
  };

  // removeTodo 액션을 리듀서에 전달하여 상태 변경
  const state = todoReducer(initialState, removeTodo(2));

  // 상태에서 할 일이 제거되었는지 확인
  expect(state.items).toHaveLength(3);
  expect(state.items[1].text).toBe('Learn Jest')
});
