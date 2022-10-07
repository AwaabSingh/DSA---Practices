class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.frist = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.frist;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.frist = newNode;
      this.last = newNode;
    } else {
        this.last.next = newNode;
        // console.log('lastNext',this.last.next);
        this.last = newNode
        // console.log('last',this.last)
    }
    this.length++;
    return this
  }

  dequeue() {
    if(!this.frist) {
        return null 
    }

    if(this.frist === this.last) {
        this.last = null
    }

    // const holdingPointer = this.frist
    this.frist = this.frist.next
    this.length--
    return this
  }
}

const myQueue = new Queue()
myQueue.enqueue('Joy')
myQueue.enqueue('Matt');
myQueue.dequeue('Joy');

console.log(myQueue)