import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from '../../components/Hello';

test('renders the correct hello based on the name prop', () => {
  // `name` prop이 "Alice"일 때, "Hello, Alice!"가 렌더링되는지 테스트합니다.
  render(<Hello name="Alice" />);
  const greetingElement = screen.getByText('Hello, Alice!');
  expect(greetingElement).toBeInTheDocument();

  // `name` prop이 "Bob"일 때, "Hello, Bob!"가 렌더링되는지 테스트합니다.
  render(<Hello name="Bob" />);
  const greetingElement2 = screen.getByText('Hello, Bob!');
  expect(greetingElement2).toBeInTheDocument();
});