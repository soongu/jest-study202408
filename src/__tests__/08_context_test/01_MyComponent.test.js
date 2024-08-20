// src/__tests__/08_context_test/01_MyComponent.test.js
import { render, screen } from '@testing-library/react';
import React from 'react';
import MyComponent from '../components/MyComponent';
import { MyContextProvider } from '../context/MyContext';

test('renders with context value', () => {
  render(
    <MyContextProvider>
      <MyComponent />
    </MyContextProvider>
  );

  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});
