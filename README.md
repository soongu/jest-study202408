## 예제: 간단한 테스트 파일 작성 및 실행

프로젝트 내에 간단한 테스트 파일을 작성해봅시다. `src` 폴더 내에 `sum.test.js` 파일을 생성합니다.

1. **테스트 파일 작성**:

   ```tsx
   // src/sum.test.js
   function sum(a: number, b: number) {
     return a + b;
   }

   test('adds 1 + 2 to equal 3', () => {
     expect(sum(1, 2)).toBe(3);
   });
   ```

   이 테스트는 `sum` 함수를 테스트하는 간단한 예제입니다.

2. **테스트 실행**:

   터미널에서 `npm test` 명령어를 실행하여 테스트를 실행합니다. 성공적으로 통과하면 다음과 같은 결과를 얻을 수 있습니다:

   ```bash
   PASS  src/sum.test.ts
   ✓ adds 1 + 2 to equal 3 (7ms)

   ```
