
describe('learn expect function', () => {
  
  // toBe: 엄격한 동등성 ,  === 연산자와 동일
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  // toEqual: 객체나 배열의 구조적 동등성
  test('object assignment', () => {
    const data = {one: 1};
    data.two = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

  // toBeTruthy, toBeFalsy : 값이 참인지 거짓인지
  test('truthy and falsy', () => {
    const n = 0;
    expect(n).toBeFalsy(); // 0은 falsy 값
    expect(n).not.toBeTruthy();
  });

  test('null and undefined', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).not.toBeUndefined();
  });

  // toContain: 배열 또는 문자열에 특정 요소 포함 여부
  test('the shopping list has beer on it', () => {
    const shoppingList = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'beer',
    ];
    expect(shoppingList).toContain('beer');
  });

  function compileCode(n) {
    if (n === 1) throw new Error('you are using the wrong JDK');
  }
  
  test('make error', () => {
    expect(() => compileCode(1)).toThrow();
  });
  

});
