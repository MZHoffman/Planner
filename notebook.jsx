//this.changeEndTimes(events);
// events.map(function (v, k, a) {
//   if (k > key) {
//     console.log("1", k, v)
//     events[k].start = events[k - 1].end;
//     events[k].end = timeMath(events[k].start, events[k].duration, "add")
//   }
// })
//events.map(function (v, k, a) {
// if (k > 0) {
//console.log(k - 1)
//console.log(a[k - 1].end)
//if(){}
// a[k - 1].duration = timeMath(v.start, a[k - 1].start, "sub")
// console.log(JSON.stringify(v.start), " minuts ", JSON.stringify(a[k - 1].start), k)
//a[k - 1].end = timeMath(a[k - 1].start, a[k - 1].duration, "add")
//v.start = a[k - 1].end
//  console.log(JSON.stringify(v.start), " equals ", JSON.stringify(a[k - 1].end), k)
//v.end = timeMath(v.start, v.duration, "add")
//    console.log(JSON.stringify(v.end), " equals ", JSON.stringify(v.start), JSON.stringify(v.duration), k)
//   }
// }
// )


// this.changeEndTimes(events); //just for this plus
if (key > 0) { // checks if its not the first event
    events[key - 1].duration = timeMath(events[key].start, events[key - 1].start, "sub")
    // change end itme of previous event
    events[key - 1].end = timeMath(events[key - 1].start, events[key - 1].duration, "add")
    // change end time of current event
    if ((timeToTimestamp(events[key].start) + timeToTimestamp(events[key].duration) > 86340000)) {
        events[key].duration = "00:00"
        console.log("Changing duration to 00:00 to avoid going over 24h")
    }
    events[key].end = timeMath(events[key].start, events[key].duration, "add")
    // change future events times
    events.map((v, k) => {
        if (k > key) {
            // console.log(k, key)
            events[k].start = events[k - 1].end
            events[k].startTimeStamp = timeToTimestamp(events[k].start)
            if ((timeToTimestamp(events[k].start) + timeToTimestamp(events[k].duration) > 86340000)) {
                events[k].duration = "00:00"
                console.log("Changing duration to 00:00 to avoid going over 24h")
            }
            events[k].end = timeMath(events[k].start, events[k].duration, "add")
        }
    }
    )
} else {
    if ((timeToTimestamp(events[key].start) + timeToTimestamp(events[key].duration) > 86340000)) {
        events[key].duration = "00:00"
        console.log("Changing duration to 00:00 to avoid going over 24h")
    }
    events[key].end = timeMath(events[key].start, events[key].duration, "add")
    events.map((v, k) => {
        if (k > key) {
            // console.log(k, key)
            events[k].start = events[k - 1].end
            events[k].startTimeStamp = timeToTimestamp(events[k].start)
            if ((timeToTimestamp(events[k].start) + timeToTimestamp(events[k].duration) > 86340000)) {
                events[k].duration = "00:00"
                console.log("Changing duration to 00:00 to avoid going over 24h")
            }
            events[k].end = timeMath(events[k].start, events[k].duration, "add")
        }
    }
    )
}

this.setState({ events })
    }