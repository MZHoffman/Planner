

export function timeToTimestamp(Time) {
    return Date.parse(`1970-1-1 ${Time}`)
}

export function timestampToTime(timestamp) {
    let date = new Date(timestamp);
    let hours = "0" + date.getHours();
    let minutes = "0" + date.getMinutes();
    let formattedTime = hours.substr(-2) + ':' + minutes.substr(-2);
    return formattedTime
}

export function timeMath(t1, t2, operation) {
    t1 = timeToTimestamp(t1);
    t2 = timeToTimestamp(t2);
    let result = operation === "add" ? t1 + t2 : operation === "sub" ? t1 - t2 : console.log("add or sub onbly");
    return timestampToTime(result)
}