
const user = {
  getName: () => 'Real Name',
};

test('spies on getName method', () => {
  const spy = jest.spyOn(user, 'getName');

  // 모킹된 메서드 호출
  const name = user.getName();

  // 메서드가 호출되었는지 확인
  expect(spy).toHaveBeenCalled();

  // 메서드가 올바른 결과를 반환했는지 확인
  expect(name).toBe('Real Name');

  // 스파이를 복구합니다.
  spy.mockRestore();
});
