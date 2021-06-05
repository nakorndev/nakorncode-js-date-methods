const date = new Date()

console.log('defaul:', date.toLocaleString())
console.log('th-TH:', date.toLocaleString('th-TH'))

console.log('dateStyle full:', date.toLocaleString('th-TH', { dateStyle: 'full' }))
console.log('dateStyle long:', date.toLocaleString('th-TH', { dateStyle: 'long' }))
console.log('dateStyle medium:', date.toLocaleString('th-TH', { dateStyle: 'medium' }))
console.log('dateStyle short:', date.toLocaleString('th-TH', { dateStyle: 'short' }))

console.log('timeStyle full:', date.toLocaleString('th-TH', { timeStyle: 'full' }))
console.log('timeStyle long:', date.toLocaleString('th-TH', { timeStyle: 'long' }))
console.log('timeStyle medium:', date.toLocaleString('th-TH', { timeStyle: 'medium' }))
console.log('timeStyle short:', date.toLocaleString('th-TH', { timeStyle: 'short' }))

console.log('all full:', date.toLocaleString('th-TH', { dateStyle: 'full', timeStyle: 'full' }))

console.log('Asia/Bangkok:', date.toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' }))
console.log('Asia/Shanghai:', date.toLocaleString('th-TH', { timeZone: 'Asia/Shanghai' }))
console.log('America/New_York:', date.toLocaleString('th-TH', { timeZone: 'America/New_York' }))
