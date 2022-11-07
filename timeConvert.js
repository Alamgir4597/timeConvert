

function timeConversion(s) {
  let [time, part] = [s.substring(0, s.length - 2), s.substring(s.length - 2)]
  console.log(time);
   console.log(part);
  time = time.split(":").map(Number)
  if (part === "PM" && time[0] === 12) time[0] = 12
  if (part === "PM" && time[0] !== 12) time[0] = (time[0] + 12) % 24
  if (part === "AM" && time[0] === 12) time[0] = 0 
    if (part === "AM" && time[0] !== 12) time[1] = time[1] + 45
    if (part === "AM" && time[0] !== 12) time[2] = time[2] + 45
    if (part === "PM" && time[0] === 12) time[1] = time[1] + 45
    if (part === "PM" && time[0] === 12) time[2] = time[2] + 45
  return time
    .map(String)
    .map(s => s.padStart(2, "0"))
    .join(":")
}


const inputTime = "12:01:00PM";
// timeConversion(inputTime) 
// const viewFunction = timeConversion(inputTime) 
// console.log( viewFunction);

console.log(timeConversion(inputTime))