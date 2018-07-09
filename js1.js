function largest(){
  let large = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > large) {
      large = arguments[i];
    }
  }
  return large;
}

function smallest(){
  let small = +Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < small) {
      small = arguments[i];
    }
  }
  return small;
}

largest(2, 0.1, -5, 100, 3) // 100
smallest(2, 0.1, -5, 100, 3) // -5

function transform(baseArray){
  let newArr = [];
  newArr = baseArray.map(function(item){
    return function(){
      return item;
    }
  });
 return newArr;
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
newArray[3](); // should return 40
newArray[4](); // should return 50


function sum(){
  let result = 0;
  let summary = [].slice.call(arguments);

  if (summary.length == 0){
      return result;
  }
  else {
  result = summary[0] + sum.apply(null, summary.slice(1))
  }
  return result;
}
sum(1,3,5,7); //should return 16

function countDown(maxNum){
  setTimeout(function print(){
    if (maxNum >= 0){
      console.log(maxNum--);
      setTimeout(print, 1000);
    }
  }, 1000);
}

countDown(3); // 3 2 1 0

window.Function.prototype.myBind = function () {
  const curr = this;
  const cont = arguments[0];
  const arrArgs = (Array.from(arguments)).slice(1);
  return function() {
    let fArgs = (Array.from(arguments));
    return curr.apply(cont, arrArgs.concat(fArgs));
  };
}


