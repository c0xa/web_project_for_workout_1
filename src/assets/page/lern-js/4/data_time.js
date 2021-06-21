let date = new Date("2012-02-20");
date.setHours(3);
date.setMinutes(12);
console.log(date)

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}

let date2 = new Date(2012, 0, 3);
console.log( getWeekDay(date2) );


function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0)
      day = 7;
    return day;
}

let date3 = new Date(2012, 0, 3);
console.log( getLocalDay(date3) );


function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();    
}

let date4 = new Date(2015, 0, 2);

alert( getDateAgo(date4, 1) ); 
alert( getDateAgo(date4, 2) );
alert( getDateAgo(date4, 365) );

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}