// 1

let user = {
    name: "Василий Иванович",
    age: 35
  };

  let userJson = JSON.stringify(user);
  userJson = JSON.parse(userJson);


  
  // 2


  let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  

  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  console.log( JSON.stringify(meetup, function replacer(key, value) {
    if (key != "" && value == meetup) 
      return undefined;
    return value;
  }));


  
  /* в результате должно быть:
  {
    "title":"Совещание",
    "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
    "place":{"number":23}
  }
  */