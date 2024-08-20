import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from '../../components/Greeting';

test('renders greeting with the given name', () => {
  render(<Greeting name="Hong" />);
  const greetingElement = screen.getByText(/greeting, hong!!/i);
  expect(greetingElement).toBeInTheDocument();
});
