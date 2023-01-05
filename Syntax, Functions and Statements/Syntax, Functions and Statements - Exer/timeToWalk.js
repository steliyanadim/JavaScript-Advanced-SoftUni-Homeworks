function timeToWalk(steps, footPrint, speed) {
    let distanceInMetres = steps * footPrint;
    let breakTime = Math.floor(distanceInMetres / 500);
    let distanceInKm = distanceInMetres / 1000;
    let hours = (distanceInKm / speed);
    let minutes = ((hours - Math.trunc(hours)) * 60) + breakTime;
    let seconds = ((minutes - Math.trunc(minutes)) * 60).toFixed(0);

    hours = Math.trunc(hours);
    minutes = Math.trunc(minutes);
    seconds = Math.trunc(Number(seconds));

    let formatedHours = hours < 10 ? `0${hours}` : `${hours}`;
    let formatedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let formatedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    console.log(`${formatedHours}:${formatedMinutes}:${formatedSeconds}`);
}
timeToWalk(2564, 0.70, 5.5)
timeToWalk(4000, 0.60, 5)