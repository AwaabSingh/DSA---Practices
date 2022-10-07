class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert the frist node
  insertFrist(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  // insert the last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // check if there data is empty
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }
  // insert index (anywhere in the list)
  insertAt(data, index) {
    //  check if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // if first index
    if (index === 0) {
      this.head = new Node(data, this.head);
      // or
      // this.insertFrist(data)
      return;
    }

    const node = new Node(data);
    let current, previous;

    // set current to frist
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; //Node before the index
      count++;
      current = current.next; //Node after the index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // get at index (anywhere in the list)
  getAt(index) {
    let current = this.head;
    let count = 0;

    while(current) {
        if(count === index) {
            console.log(current.data)
        }

        count++;
        current = current.next
    }
    return null;
  }
  // remove at index (anywhere in the list)
  removeAt(index){
    if(index > 0 && index > this.size)  {
        return;
    }
    
    let current = this.head;
    let previous;
    let count = 0;

    // Remove frist 
    if(index === 0) {
        this.head = current.next
    } else {
        while(count < index) {
            count++;
            previous = current
            current = current.next
        }

        previous.next = current.next
    }

    this.size--
  }
  // clear list
  clearList() {
    this.head = null
    this.size = 0
  }
  // print list data
  printListData() {
    // get current node
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFrist(100);
ll.insertFrist(200);
ll.insertFrist(300);
// ll.insertLast(400);
// ll.insertAt(500, 2)
// ll.getAt(2)
ll.removeAt(2)
ll.clearList()
ll.printListData();
