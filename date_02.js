/*Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

For instance:

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"*/

function getWeekDay(date) {
  let days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  return days[date.getDay()];
}

let date = new Date(2022, 0, 3); // 3 jan 2014
alert( getWeekDay(date) );
