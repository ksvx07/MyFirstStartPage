const clock = document.querySelector(".time");
const date = document.querySelector(".date");


function main() {
    const time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds(),
    year = time.getFullYear().toString().substr(-2),
    month = time.getMonth() + 1,
    day = time.getDate(),
    week = time.toLocaleString('en-us', {  weekday: 'short' });
    clock.innerText = `${hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
    date.innerText = `${year}. ${month}. ${day} ${week}`

}

setInterval(main, 1000);