class Snapshot {
  constructor(array) {
    var arr = array;
    this.arrCopy = [...array];
    this.getArr = function () {
      return arr;
    };
    this.restore = this.restore.bind(this);
  }

  restore() {
    return this.arrCopy;
  }
}

var array = [1, 2];
var snap = new Snapshot(array);
array[0] = 3;
array = snap.restore();
console.log(array.join());
array.push(4);
array = snap.restore();
console.log(array.join());
