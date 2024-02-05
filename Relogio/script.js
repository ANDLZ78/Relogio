const ClockDigit = document.querySelector('.clock-digit');

const Element = [];
for (let i = 1; i<= 12; i++){
    Element.push(
        `<span style = "--value: ${i}"><p>${i}</p></span>`
    )
    //console.log(Element)
}
ClockDigit.insertAdjacentHTML("afterbegin", Element.join(''));

const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

function fecthTime (){
    let date = new Date ();
    let Realhour = date.getHours();
    let RealMinutes = date.getMinutes();
    let RealSeconds = date.getSeconds();
    seconds.style.transform= `rotate(${RealSeconds * 6}deg)`;
    minutes.style.transform= `rotate(${RealMinutes * 6}deg)`;
    hours.style.transform= `rotate(${Realhour * 30 +RealMinutes / 2}deg)`;

}

fecthTime();
//100 milisecond = 1sec
setInterval(fecthTime,1000)