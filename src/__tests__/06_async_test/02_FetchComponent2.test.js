
import { render, screen } from '@testing-library/react';
import React from 'react';
import FetchComponent2 from '../../components/FetchComponent2';

test('displays fetched data after loading', async () => {
  // `fetch`를 모킹하여 API 호출을 대체합니다.
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ message: 'Data received' }),
    })
  );

  // 컴포넌트를 렌더링합니다.
  render(<FetchComponent2 />);

  // "Loading..." 상태가 있는지 확인합니다.
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // 데이터가 렌더링될 때까지 기다립니다.
  const fetchedDataElement = await screen.findByText('Data received');

  // 데이터가 렌더링된 후 확인합니다.
  expect(fetchedDataElement).toBeInTheDocument();

  // 모킹된 `fetch`가 호출되었는지 확인합니다.
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('/api/data');
});
