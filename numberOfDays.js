//.  https://learnersbucket.com/examples/interview/difference-between-two-dates/


const getDaysBetweenDates=(date1,date2)=>{

firstDate = new Date(date1)
secondDate = new Date(date2)

const numberOfMilliSeconds = 24*60*60*1000;

const numberOfDays = Math.ceil(Math.abs(firstDate - secondDate)/numberOfMilliSeconds)

return numberOfDays
}

console.log(getDaysBetweenDates('2022-01-30', '12/1/2020'));
//426

console.log(getDaysBetweenDates('10/15/2020', '12/1/2020'));
//47
