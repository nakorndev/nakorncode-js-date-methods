const date = new Date()

// .toString() = string
// .valueOf() = number

console.log(date)
console.log(date.toString())
console.log(date.valueOf()) // unix timestamp
console.log(String(date))
console.log(Number(date))

// 1620194022888 = 05/May/2021 T 12:53:42

const dateFromUnix = new Date(1620194022888)
console.log(dateFromUnix)

const date1 = new Date('2020-02-03')
const date2 = new Date('2020-02-06')

console.log(date1 < date2)
