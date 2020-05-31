class Node {
  // constructor
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor(props) {
    this.head = null;
    this.size = 0;
  }

  size() {
    return this.size;
  }

  isEmpty() {
    return this.size == 0;
  }

  pushFront(item) {}

  popFront() {}

  printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }

  pushBack(element) {
    // creates a new node
    var node = new Node(element);

    // to store current node
    var current;

    // if list is Empty add the
    // element and make it head
    if (this.head == null) this.head = node;
    else {
      current = this.head;

      // iterate to the end of the
      // list
      while (current.next) {
        current = current.next;
      }

      // add node
      current.next = node;
    }
    this.size++;
  }

  popBack() {}

  front() {
    return this.head;
  }

  back() {}

  add(element) {
    // creates a new node
    var node = new Node(element);

    // to store current node
    var current;

    // if list is Empty add the
    // element and make it head
    if (this.head == null) this.head = node;
    else {
      current = this.head;

      // iterate to the end of the
      // list
      while (current.next) {
        current = current.next;
      }

      // add node
      current.next = node;
    }
    this.size++;
  }

  insert(element, index) {
    if (index > 0 && index > this.size) return false;
    else {
      // creates a new node
      var node = new Node(element);
      var curr, prev;

      curr = this.head;

      // add the element to the
      // first index
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        var it = 0;

        // iterate over the list to find
        // the position to insert
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // adding an element
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  removeAt(element) {
    var current = this.head;
    var prev = null;

    // iterate over the list
    while (current != null) {
      // comparing element with current
      // element if found then remove the
      // and return true
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }
}

export default LinkedList

// creating an object for the
// Linkedlist class
var ll = new LinkedList();

ll.add(10);
ll.add(20);

// prints 10
ll.printList();
