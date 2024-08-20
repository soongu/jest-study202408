import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from '../../components/Hello';

test('renders the correct greeting', () => {
  // Hello컴포넌트 렌더링, props로 name을 전달
  render(<Hello name="World" />);

  // hello, world! 라는 텍스트를 가진 HTML요소 탐색
  // i는 대소문자 구분없음을 의미
  const greetingElement = screen.getByText(/hello, world!/i);

  // 찾은 요소가 컴포넌트 안에 있음을 단언(assertion)
  expect(greetingElement).toBeInTheDocument();
});