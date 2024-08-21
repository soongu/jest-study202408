import { render, screen } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../../config/route-config';

test('홈페이지 렌더링 테스트', () => {
  render(<RouterProvider router={router} />);

  // 홈 페이지에서 특정 텍스트가 보이는지 확인
  expect(screen.getByText(/welcome to the home page/i)).toBeInTheDocument();
});
