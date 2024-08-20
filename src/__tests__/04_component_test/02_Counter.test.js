import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../../components/Counter';

test('increments counter when button is clicked', () => {
  // Counter 컴포넌트 렌더링 수행
  render(<Counter />);

  // 텍스트가 increment인 요소 탐색
  const buttonElement = screen.getByText(/increment/i);
  
  // 해당 요소 클릭 명령
  fireEvent.click(buttonElement);

  // count: 1 이라는 텍스트를 가진 요소 탐색
  const countElement = screen.getByText(/count: 1/i);

  // 해당 요소가 컴포넌트 안에 있다고 단언
  expect(countElement).toBeInTheDocument();
});