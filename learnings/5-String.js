const name = "kartik-phad";
const repoCount = 14;

// better way to pass values in string and more readable   [String interpolation {modern way}]
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

console.log(name[0]);
console.log(name.length)
console.log(name.toUpperCase())   //not change in original value cause rimitive and stored in stackas copy
console.log(name.charAt('3'))       //t
console.log(name.indexOf('a'))

const newString = name.substring(0,3)
console.log(newString)
