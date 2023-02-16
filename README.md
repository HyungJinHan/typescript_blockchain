# TypeScript Blockchian 예제
### TypeScript를 사용하여 노마드코더의 블록체인 강의 연습용입니다.

<br>

#  기본 설정

## `tsconfig.json` 설정

- `TypeScript`가 `src` 폴더 내의 모든 파일을 확인하는 설정

  ```JSON
  {
    "include": [
      "src"
    ]
  }
  ```

<br>

- `JavaScript` 파일이 생성될 디렉토리를 지정하는 설정

  ```JSON
  {
    "compilerOptions": {
      "outDir": "build"
    }
  }
  ```

    > `TypeScript`는 컴파일러로, `.ts` 파일들을 일반적인 `JavaScript`로 컴파일시켜줌

<br>

- `package.json`의 `scripts` 수정

  ```JSON
  {
    "scripts": {
      "build": "tsc"
    }
  }
  ```

  ```bash
  npm run build
  ```
  위의 명령어를 통해 `tsc` 실행시키도록 하는 작업

  실행을 통해 `build` 폴더 생성 및 내부에 `index.js` 자동 생성

  <br>

  ### 실행을 통해 컴파일 된 결과

    - 실행시킬 `index.ts` 코드
      ```TS
      const hello = () => 'hi';
      ```

    - 컴파일되어 생성된 `index.js` 코드
      ```JS
      var hello = function () { return 'hi'; };
      // 호환성을 위해 낮은 버전의 JavaScript 코드로 자동 컴파일됨
      ```

  <br>

  ### 컴파일 버전 변경법

  - 컴파일될 `JavaScript`의 버전 설정

    ```JSON
    {
      "compilerOptions": {
      "outDir": "build",
      "target": "ES6"
      }
    }
    ```

  <br>

  ### `ES6` 버전으로 변경 후 컴파일 한 결과

    - 실행시킬 `index.ts` 코드
      ```TS
      const hello = () => 'hi';
      ```

    - 컴파일되어 생성된 `index.js` 코드
      ```JS
      const hello = () => 'hi';
      // ES6 버전에서 호환되는 const로 변경