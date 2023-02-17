interface Config {
  url: string;
}

declare module 'myPackage' {
  function init(config: Config): boolean;
  function exit(code: number): number;
}

// myPackage.js의 함수를 모듈 형태로 만들어 TypeScript에서 불러와 사용할 수 있도록 지정