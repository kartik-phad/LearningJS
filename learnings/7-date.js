const myDate = new Date();      // it is a date object

console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(typeof(myDate))

let myCreatedDate = new Date(2025 , 3 , 21)     //month are startd by 0 in js
console.log(myCreatedDate.toDateString())
