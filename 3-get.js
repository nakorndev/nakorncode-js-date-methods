const date = new Date()

console.log(date)
console.log('.getDay():', date.getDay())
// 0 = sun, 1 = mon, 2 = tue, 3 = wed, 4 = thu, 5 = fri, 6 = sat
console.log('.getDate():', date.getDate())
console.log('.getMonth() + 1:', date.getMonth() + 1)
console.log('.getFullYear():', date.getFullYear())
console.log('.getFullYear() + 543:', date.getFullYear() + 543)

const birth = new Date('2540-02-29') // ไม่ควรใช้ ควรเป็น ค.ศ.
console.log(birth)

console.log('.getTime():', date.getTime())
console.log('.getHours():', date.getHours())
console.log('.getMinutes():', date.getMinutes())
console.log('.getSeconds():', date.getSeconds())
console.log('.getMilliseconds():', date.getMilliseconds())
