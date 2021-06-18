function makeCounter() {
    let count = 0;
    function counter() {
      return count++;
    };

    counter.set = value => count = value;

    counter.decrease = () => count--;
  
    return counter;
  }
  
  let counter = makeCounter();
  console.log( counter() );
  console.log( counter() );

// 2
  function sum(a) {

    let currentSum = a;
  
    function func(b) {
      currentSum += b;
      return f;
    }
  
    func.toString = function() {
      return currentSum;
    };
  
    return func;
  }