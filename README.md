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

    > `TypeScript`는 컴파일러로, `.ts` 파일들을 일반적인 `JavaScript`의 `.js` 파일로 컴파일시켜줌

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

  - `lib`을 통한 라이브러리의 정의 파일을 특정해주기

    ```JSON
    {
      "compilerOptions": {
        "outDir": "build",
        "lib": [
          "ES6",
          "DOM"
        ]
      }
    }
    ```
    > 쉽게 말해 `TypeScript`에서 `ES6` 버전의 `JavaScript` 문법에 관련된 모든 이벤트와 메소드의 자동 완성 기능을 제공
    >
    >
    > 위와 같이 `lib` 설정을 `DOM`으로 하지 않을 시, `TypeScript`에서 `JavaScript`의 문법을 찾지 못해 에러남

<br>

  - `strict` 설정을 통해 에러 부분 표시 설정

    ```JSON
    {
      "compilerOptions": {
        "strict": true
      }
    }
    ```
    > 기본적으로 `false`로 지정되어 있으며, `true`를 통해 에러를 표시

<br>

  - `allowJs`를 통해 `TypeScript` 내에서 `JavaScript`를 허용하는 설정

    ```JSON
    {
      "compilerOptions": {
        "allowJs": true
      }
    }
    ```
    > 사용할 `package`가  `JavaScript` 파일일 경우, `xxx.d.ts`로 모듈을 불러와 사용해야 하지만, 위의 설정을 통해 `JavaScript` 파일 자체를 불러올 수 있도록 함

<br>

### 실행 결과 & 컴파일 버전 변경법
  
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

-  실행을 통해 컴파일 된 결과 (`ES3` 버전)

    <details>
    <summary><i>결과 보기</i></summary>

    - 실행시킬 `index.ts` 코드
      ```TS
      const hello = () => 'hi';
      ```

    - 컴파일되어 생성된 `index.js` 코드
      ```JS
      var hello = function () { return 'hi'; };
      // 호환성을 위해 낮은 버전의 JavaScript 코드로 자동 컴파일됨
      ```
    </details>

<br>

- `ES6` 버전으로 변경 후 컴파일 한 결과

    <details>
    <summary><i>결과 보기</i></summary>

    - 실행시킬 `index.ts` 코드
      ```TS
      const hello = () => 'hi';
      ```

    - 컴파일되어 생성된 `index.js` 코드
      ```JS
      const hello = () => 'hi';
      // ES6 버전에서 호환되는 const로 변경
      ```
    </details>

<br>

# `@ts-check` & `JSDoc`

## `@ts-check`

- `JavaScript` 파일에서 `TypeScript` 방식으로 타입 보호를 가능하게 하는 방식

<br>

## `JSDoc`

- 해당 함수의 메소드 및 타입, 리턴값을 확인 할 수 있는 주석 방식

<br>

## `@ts-check` & `JSDoc` 사용

- 사용 예제

  ```JS
  // @ts-check
  /**
   * Initializes the project (JSDoc)
   * @param {object} config 
   * @param {boolean} config.debug
   * @param {string} config.url
   * @returns boolean
   */
  export function init(config) {
    return true;
  }
  ```

<br>

- 해당 함수의 주석 내용

  ```
  Initializes the project (JSDoc)

  @param config

  @returns — boolean
  ```

<br>

# `Blockchain`

## `Blockchain`의 용어 정리

### `Hash`

  - 데이터와 이전 해시코드를 종합해 새로운 해시로 변환

  - 일방향 함수와 결정론적으로 동작

    > 일방향 함수란?
    > 
    > 
    > `한형진`을 해시코드화 할 수 있지만, 만들어진 해시코드를 통해 `한형진`을 다시 만들 수 없음
    > 
    >> 예제
    >> 
    >> `한형진` -> `4c74700279d5580711b8ae40d1fe7ee1` ⭕
    >> 
    >> `4c74700279d5580711b8ae40d1fe7ee1` -> `한형진` ❌

    <br>

    > 결정론적이란?
    > 
    > 
    > `input`인 `한형진`의 해시코드 `output`은 항상 같은 것으로 정해져 있다는 의미
    > 
    > 같은 `input`으로 해시코드를 생성하면 항상 같은 해시코드를 `output`함
    > 
    >> 예제
    >> 
    >> `한형진` -> `4c74700279d5580711b8ae40d1fe7ee1`
    >> 
    >> `한형진!` -> `09f51d7143b6c01765d86a265656c1f3`

<br>

### `Previous Hash`

  - 저장된 데이터를 해시코드화 하는 작업

<br>

### `data`

  - 거래내역과 같은 다양한 정보들을 저장