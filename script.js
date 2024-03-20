var digitalElement = document.querySelector('.digital');
var sElement = document.querySelector('.p_s');
var mElement = document.querySelector('.p_m');
var hElement = document.querySelector('.p_h');


function uptadeClock() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    digitalElement.innerHTML = `${hour}:${minute}:${second}`;

    var sDeg = ((360 / 60) * second) - 90;
    var mDeg = ((360 / 60) * minute) - 90;
    var hDeg = ((360 / 12) * hour) - 90;

    sElement.computedStyleMap.transform = `rotate(${sDeg}deg)`;
    mElement.computedStyleMap.transform = `rotate(${mDeg}deg)`;
    hElement.computedStyleMap.transform = `rotate(${hDeg}deg)`;

}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
 }


setInterval(uptadeClock, 1000);
uptadeClock();