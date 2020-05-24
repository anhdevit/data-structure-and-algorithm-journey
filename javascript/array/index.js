class Array {
  constructor() {
    // It store the length of array.
    this.length = 0;
    // Object to store elements.
    this.data = {};
    this.capacity = 0;
  }

  size() {
    this.length;
  }

  capacity() {
    this.capacity;
  }

  isEmpty() {
    this.length = 0;
    // Object to store elements.
    this.data = {};
    this.capacity = 0;
  }

  itemAt(index) {
    return this.array[index];
  }

  append(item) {
    this.data[this.length] = item;
    this.length++;
    if (this.length > this.capacity) {
      this.capacity *= 2;
    }
    return this.data;
  }

  insert(item, index) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
    if (this.length > this.capacity) {
      this.capacity *= 2;
    }
    return this.data;
  }

  pop() {
    let item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    if (this.length < this.capacity/2) {
      this.capacity /= 2
    }
    return this.data;
  }

  removeAt(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    if (this.length < this.capacity/2) {
      this.capacity /= 2
    }
    return this.data;
  }
}
