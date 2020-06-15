class Array {
  constructor(capacity) {
    this.length = 0;
    this.capacity = capacity
    this.data = {}
  }

  size() {
    return this.length
  }

  capacity() {
    return this.capacity
  }

  isEmpty() {
    return this.length === 0
  }

  itemAt(index) {
    if(this.data[index]) {
      return this.data[index]
    }
    return null
  }

  append(item) {
    this.data[this.length] = item 
    this.length++
    if(this.length > this.capacity) {
      this.capacity *= 2
    }
    return this.data
  }

  insert(item, index) {
    for(let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i-1]
    }
    this.data[index] = item
    this.length++
    return this.data
  }

  pop() {
    if (this.length > 0) {
      this.data(this.length - 1)
      delete this.data[this.length - 1]
      this.length--
      return this.data
    }
    return null
  }

  removeAt(index) {
    for(let i = index; i < this.length - 1; i++ ) {
      this.data[i] =  this.data[i+1]
    }
    delete this.data[this.length - 1]
    this.length--
    return this.data
  }
}