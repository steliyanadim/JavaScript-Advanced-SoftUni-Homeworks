function daysInAMonth(month, year){
let numberOfDays= new Date(year, month, 0).getDate();
console.log(numberOfDays);
}
daysInAMonth(2, 2021)