import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { router as originalRouter } from '../../config/route-config';

test('About 페이지로 내비게이션 테스트', () => {

  // About 페이지로의 경로를 설정한 새 라우터 생성
  const initialEntries = ['/about'];
  const router = createMemoryRouter(originalRouter.routes, { initialEntries });

  render(
      <RouterProvider router={router} />
  );

  // About 페이지에서 특정 텍스트가 보이는지 확인
  expect(screen.getByText(/about us/i)).toBeInTheDocument();
});
