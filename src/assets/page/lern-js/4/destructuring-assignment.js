let user = {
    name: "John",
    years: 30
  };

let {name, years: age, isAdmin = false} = user;

alert( name );
alert( age ); 
alert( isAdmin ); 

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function topSalary(salaries) {
    let maxSalray = 0;
    let name = "";
    for(const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }
    return name;
}