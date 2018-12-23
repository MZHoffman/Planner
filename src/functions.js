export function timeToTimestamp(Time) {
  return Date.parse(`1970-1-1 ${Time}`)
}

export function timestampToTime(timestamp) {
  const date = new Date(timestamp)
  const hours = `0${date.getUTCHours()}`
  const minutes = `0${date.getUTCMinutes()}`
  const formattedTime = `${hours.substr(-2)}:${minutes.substr(-2)}`
  return formattedTime
}

export function timeMath(t1, t2, operation) {
  t1 = timeToTimestamp(t1)
  t2 = timeToTimestamp(t2)
  const result =
    operation === 'add'
      ? t1 + t2
      : operation === 'sub'
      ? t1 - t2
      : console.log('add or sub onbly')
  return timestampToTime(result)
}

export function fixUserInput(value, prevValue = 0) {
  const isItPM = value.includes('p') ? 43200000 : 0
  value = value.replace(/\D/g, '')

  switch (value.length) {
    case 0:
      // console.log("Please enter 1 to 4 digits");
      value = prevValue
      break
    case 1:
      // console.log(`0${value}00`);
      value = `0${value}00`
      break
    case 2:
      // console.log(`${value}00`);
      value = `${value}00`
      break
    case 3:
      // console.log(`0${value}`);
      value = `0${value}`
      break
    case 4:
      // console.log(value, "case 4");
      break
    default:
      // console.log("Max 4 digits please");
      value = prevValue
  }
  if (value.slice(0, -2) > 23) {
    // console.log("Max 23h!", value.slice(0, -2))
    value = prevValue
    // console.log("Max 23h!")
  } else if (value.substr(-2) > 59) {
    // console.log("Max 59 min!", value.substr(-2))
    value = prevValue
    // console.log("Max 59 min!", value, prevValue)
  }
  // console.log("the final val ", value)

  let timeStamp = timeToTimestamp(`${value.slice(0, -2)}:${value.substr(-2)}`)
  if (timeStamp < isItPM) {
    timeStamp += isItPM
  }
  return timeStamp
}
