1

function sumTo(n) {
    let result = 0;
    for (let number = 1; number <= n; number++) {
        result += number;
    }
    return result;
}


function sumTo(n) {
    if (n == 1)
        return 1;
    n += sumTo(n - 1);
    return n;
}

function sumTo(n) {
    return n + (n + 1) / 2;
}

console.log(sumTo(100));

// 2

function factorial(n) {
    if (n == 0) 
        return (1);
    return (n * factorial(n - 1));
}

console.log(factorial(5))


// 3

function fib(n) {
    if (n == 1 || n == 2)
        return 1;
    else if (n < 1) {
        return 0;
    }
    return (fib(n - 1) + fib(n - 2));
}

console.log(fib(3));
console.log(fib(7));
// console.log(fib(77));


// 4

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

    function printList(list) {
        console.log(list.value);
        if (list.next != null)
            printList(list.next);
        return;
    }

function printList(list) {
    while (list.next != null) { 
        console.log(list.value);
        list = list.next;
    }
    console.log(list.value);
    return;
}

printList(list);


function printReverseList(list) {
    if (list != null) { 
        printReverseList(list.next);
        console.log(list.value);
    }
    return;
}

function printReverseList(list) {
    let arr = [];
    while (list != null) {
    arr.push(list.value);
    list = list.next;
    }
    for (let i = 0; i < arr.length; i++)
    console.log(arr[i]);
}

printReverseList(list);