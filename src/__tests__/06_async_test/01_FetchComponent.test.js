
import { render, screen } from '@testing-library/react';
import React from 'react';
import FetchComponent from '../../components/FetchComponent';

test('displays fetched data after loading', async () => {
  // 컴포넌트를 렌더링합니다.
  render(<FetchComponent />);

  // "Loading..." 상태가 있는지 확인합니다.
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // 비동기 작업이 완료될 때까지 기다립니다.
  const fetchedDataElement = await screen.findByText('Data received');

  // 데이터가 렌더링된 후 확인합니다.
  expect(fetchedDataElement).toBeInTheDocument();
});
