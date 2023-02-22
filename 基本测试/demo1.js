const b = 1;

const a = () => {
  console.log(this.b);
};

a();

// const c = new a()

class c {
  constructor() {
    this.b = 2;
  }
  a() {
    console.log(this.b);
  }
}

// const d = new c();
// d.a();

function myConcat(separator) {
  console.log(arguments);
  var args = Array.prototype.slice.call(arguments, 1);
  console.log(args);
  return args.join(separator);
}

const myConcat2 = (separator, ...args) => {
  console.log(args);
  var args1 = Array.prototype.slice.call(arguments, 1);
  console.log(args1);
  return args.join(separator);
};

console.log(myConcat2(",", "red", "orange", "blue"));