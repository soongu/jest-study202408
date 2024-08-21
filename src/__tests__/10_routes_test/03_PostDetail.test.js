
// src/__tests__/10_routes_test/03_PostDetail.test.js

import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { router as originalRouter } from '../../config/route-config';

test('PostDetail 페이지 로딩 테스트', async () => {
  // 특정 포스트의 상세 페이지 URL로 이동
  const initialEntries = ['/posts/1'];
  const router = createMemoryRouter(originalRouter.routes, { initialEntries });

  render(<RouterProvider router={router} />);

  // PostDetail 페이지의 로더가 데이터를 불러왔는지 확인
  const postTitle = await screen.findByText(/post title 1/i);
  expect(postTitle).toBeInTheDocument();
});
