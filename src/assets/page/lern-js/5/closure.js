
// 1


function sum(a) {
    result = 0;
    return function(b) {
        return a + b;
    }
}

console.log( sum(1)(2) );
console.log( sum(5)(-1) );

// 2


function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    };
}

function inArray(array) {
    return function(x) {
        return array.includes(x);
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inBetween(3, 6)) ); 
console.log ( arr.filter(inArray([1, 2, 10])) );

// 3

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

//   4

function makeArmy() {
    let i = 0; {
    while (i < 10) {
        let j = i;
        let shooter = function() {
            console.log( i );
        };
        shooters.push(shooter);
        i++;
    }
  
    return shooters;
  }
}
  
  let army = makeArmy();
  
  army[0]();
  army[5]();