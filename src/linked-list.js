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
        return this;
    }

    head() {
        if (this._head) {
            return this._head.data;
        } else {
            return null;
        }
    }

    tail() {
        if (this._tail) {
            return this._tail.data;
        } else {
            return null;
        }
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
        if ((this._head == null) && (this._tail == null)) {
            let node = new Node(data);
            this._head = this._tail = node;
            return this;
        }
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
        return this;
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
        return this;
    }

    deleteAt(index) {
        if ((this.length == 1) && (index == 0)) {
            this.clear();
            return this;
        }
        if (index == 0) {
            this._head = this._head.next;
            this._head.prev = null;
            --this.length;
            return this;
        }
        if (index == this.length - 1) {
            this._tail = this._tail.prev;
            this._tail.next = null;
            -- this.length;
            return this;
        }
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
        return this;
    }

    reverse() {
        if (this.length == 1) {
            return this;
        }
        let current = this._head;
        for (let i = 0; i <= (this.length - 1); i++) {
            [current.next, current.prev] = [current.prev, current.next];

            current = current.prev;
        }
        [this._tail, this._head] = [this._head, this._tail];
        return this;
    }

    indexOf(data) {
        let current = this._head;
        for (let i = 0; i <= (this.length - 1); i++) {
            if (current.data == data) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }
}

module.exports = LinkedList;



const list = new LinkedList();
debugger;
list.append(4).reverse().deleteAt(0).clear().insertAt(0, 3);

