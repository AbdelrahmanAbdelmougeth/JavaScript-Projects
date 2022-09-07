const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2024,8,7,22,28,0);

const year = futureDate.getFullYear();
let month = futureDate.getMonth();
month = months[month];
let day = futureDate.getDay();
day = weekdays[day];
let hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

let meredian = 'am';
if(hours >= 13 && hours <= 24){
  meredian = 'pm';
  hours = hours % 12;}
else
  meredian = 'am';

giveaway.textContent = `Giveaway Ends On ${day}, ${date} ${month} ${year} ${hours}:${minutes}${meredian}`


const futureTime = futureDate.getTime();
// console.log(futureTime);



function getRemaining(){
  const today = new Date().getTime();
  const temp = futureTime - today;
  

  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000; 

  let days = Math.floor(temp/oneDay);
  let hours = Math.floor((temp % oneDay) /oneHour);
  let minutes = Math.floor(temp % oneHour/oneMinute);
  let seconds = Math.floor(temp % oneMinute/1000);

  const values = [days,hours,minutes,seconds];

  function format(item){
    if(item < 10){
      return item = `0${item}`;
    }
    return item;
  }

  items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
  })

  if(temp < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
  }
}

let countdown = setInterval(getRemaining,1000);
