class Block {
  constructor(
    private data: string
  ) { }

  static hello() {
    return 'Hello World';
  }
}

localStorage.getItem('key');
// Storage.getItem(key: string): string