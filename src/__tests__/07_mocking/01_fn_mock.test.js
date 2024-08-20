
test('calls the mock function with correct arguments', () => {
  const mockFn = jest.fn();

  // 모킹된 함수 호출
  mockFn('arg1', 'arg2');

  // 함수가 정확히 한 번 호출되었는지 확인
  expect(mockFn).toHaveBeenCalledTimes(1);

  // 함수가 올바른 인자와 함께 호출되었는지 확인
  expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
});
