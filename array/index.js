class Array {
  constructor() {
    // It store the length of array.
    this.length = 0;
    // Object to store elements.
    this.data = {};
  }

  size() {
    this.length;
  }

  capacity() {
    this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  itemAt(index) {
    return this.array[index];
  }

  append(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  insert(item, index) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
    return this.data;
  }

  pop() {
    let item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }

  removeAt(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }
}
