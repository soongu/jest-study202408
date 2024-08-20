
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import TimerComponent from '../../components/TimerComponent';

test('displays message after timer finishes', async () => {
  // 컴포넌트를 렌더링합니다.
  render(<TimerComponent />);

  // "Waiting..." 상태가 있는지 확인합니다.
  expect(screen.getByText('Waiting...')).toBeInTheDocument();

  // "Timer finished" 메시지가 나타날 때까지 기다립니다.
  // await waitFor(() => expect(screen.getByText('Timer finished')).toBeInTheDocument());

  // `findByText`를 사용하여 비동기적으로 요소를 찾습니다.
  const messageElement = await screen.findByText('Timer finished');
  expect(messageElement).toBeInTheDocument();

});
