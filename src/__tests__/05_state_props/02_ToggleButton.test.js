import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ToggleButton from '../../components/ToggleButton';

test('renders the correct initial state and toggles the state on click', () => {
  // 컴포넌트를 렌더링합니다.
  render(<ToggleButton />);

  // 초기 상태에서는 버튼에 "OFF"가 표시되어야 합니다.
  const button = screen.getByText('OFF');
  expect(button).toBeInTheDocument();

  // 버튼을 클릭한 후 상태가 변경되어 "ON"이 표시되는지 확인합니다.
  fireEvent.click(button);
  expect(button).toHaveTextContent('ON');

  // 다시 버튼을 클릭하면 상태가 "OFF"로 돌아와야 합니다.
  fireEvent.click(button);
  expect(button).toHaveTextContent('OFF');
});
