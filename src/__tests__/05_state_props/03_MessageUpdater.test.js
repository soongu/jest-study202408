
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MessageUpdater from '../../components/MessageUpdater';

test('updates the message based on user input', () => {
  // 컴포넌트를 렌더링합니다.
  render(<MessageUpdater />);

  // 초기 메시지가 "Hello, World!"로 렌더링되었는지 확인합니다.
  const messageElement = screen.getByText('Hello, World!');
  expect(messageElement).toBeInTheDocument();

  // 입력 필드에 새로운 메시지를 입력합니다.
  const inputElement = screen.getByPlaceholderText('Update the message');
  fireEvent.change(inputElement, { target: { value: 'Goodbye, World!' } });

  // 메시지가 "Goodbye, World!"로 업데이트되었는지 확인합니다.
  const updatedMessageElement = screen.getByText('Goodbye, World!');
  expect(updatedMessageElement).toBeInTheDocument();
});
