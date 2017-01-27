const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
    }

    append(data) {
        // debugger;
        if (!this.length) {
            let node = new Node(data);
            this._head = node;
            this._tail = node;
            ++this.length;
        } else {
            let node = new Node(data, this._tail);
            this._tail.next = node;
            this._tail = node;
            ++this.length;
        }
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
      if (index <= this.length) {
          let current = this._head;

          for (let i = 0; i <= index; i++) {
              if (i == index) {
                  return current.data;
              }
              current = current.next;
          }
      }
    }

    insertAt(index, data) {
        let current = this._head;
        for (let i = 0; i <= index; i++) {
            if (i == index) {
                let node = new Node(data, (index == 0)? null : current.prev, (index == this.length) ? null : current);
                current.prev.next = node;
                current.prev = node;
                ++this.length;
            } else {
                current = current.next;
            }
        }


    }

    isEmpty() {
        if(this.length == 0) {
            return true
        } else {
            return false}
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    deleteAt(index) {
        let current = this._head;
        for (let i = 0; i <= index; i++) {
            if (i == index) {
                current.prev.next = current.next;
                current.next.prev = current.prev;
                --this.length;
            } else {
                current = current.next;
            }
        }

    }

    reverse() {
        // let current = this._head;
        // for (let i = 0; i <= (this.length-1); i++) {
        //     current.prev = [current.next, current.next = current.prev][0]
        // }
        // this._tail = [this._head, this._head = this.tail][0]

    }

    indexOf(data) {}
}

module.exports = LinkedList;


//
// var a = new LinkedList();
// debugger;
//
//
// a.append(0);
// a.append(1);
// a.append(2);
// a.append(3);
// a.append(4);
// console.log(a.head());
// console.log(a.tail());
// console.log(a.at(1));
// a.reverse();
// console.log(a.head());
// console.log(a.tail());
// console.log(a.at(1));
// a.insertAt(1, "new");
