// src/__tests__/08_context_test/02_MyComponent.test.js
import { render, screen } from '@testing-library/react';
import React from 'react';
import MyComponent from '../components/MyComponent';
import { MyContext } from '../context/MyContext';

test('renders with mocked context value', () => {

  const mockContextValue = { data: 'Mocked Data' };

  // 가짜 Provider 생성
  render(
    <MyContext.Provider value={mockContextValue}>
      <MyComponent />
    </MyContext.Provider>
  );

  expect(screen.getByText('Mocked Data')).toBeInTheDocument();
});
