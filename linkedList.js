function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;

  this.add = (data) => {
    var nn = new Node(data);
    if (this.size === 0) {
      this.head = nn;
      this.tail = nn;
    } else {
      this.tail.next = nn;
      this.tail = nn;
    }
    this.size++;
  };

  this.removeFirst = () => {
    if (this.size === 0) return;
    else if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
    } else {
      let nextEle = this.head.next;
      this.head.next = null;
      this.head = nextEle;
      this.size--;
    }
  };

  this.removeLast = function (idx) {
    var ele = this.head;
    var counter = 0;
    while (ele) {
      if (counter === idx - 1) {
        ele.next = null;
        this.size--;
      }
      ele = ele.next;
      counter++;
    }
  };

  this.remove = (idx) => {
    if (idx >= 0 && idx < this.size) {
      if (idx === 0) this.removeFirst();
      if (idx === this.size - 1) {
        this.removeLast(idx);
      }
      let ele = this.head;
      let counter = 0;
      while (ele && counter < idx) {
        if (counter === idx - 1) {
          let nextNextEle = ele.next.next;
          ele.next.next = null;
          ele.next = nextNextEle;
          this.size--;
        }
        counter++;
        ele = ele.next;
      }
    } else {
      console.log(idx + " index doesn't exist");
    }
  };

  this.show = () => {
    ele = this.head;
    while (ele) {
      console.log(ele.data);
      ele = ele.next;
    }
  };

  this.getSize = () => console.log(this.size);

  return {
    add: this.add,
    remove: this.remove,
    show: this.show,
    getSize: this.getSize,
  };
}

var list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(7);
list.show();
console.log("----------- remove now");
list.remove(0);
console.log("removed --------------");
list.show();
console.log("-----------");
list.remove(90);
list.remove(4);
console.log("-----------");
list.show();
console.log("-----------");
