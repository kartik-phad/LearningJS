const tinderUser = new Object()     //it its a singleton object 
tinderUser.id = 101,
tinderUser.age = 15;
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

//===================================================================
// CREATING NESTED OBJECTS

const NewUser = {
     UserDetails : {
             userName :{
                Name :{
                     firstName : "kartik",
                     lastname: "phad"
                }
            }
    }
}
console.log(NewUser.UserDetails.userName.Name.lastname)

//===================================================================
// // COMBINING OBJECTS or assign obj

// obj1 = {name : "A" , age : 12}
// obj2 = {name : "s" , age : 22}
// obj3 = {name : "D" , age : 32}

// const obj4 = {...obj1 , ...obj2 , ...obj3}  // using spread operator simpe way to combine object
// const CombinedObj = Object.assign({}, obj1,obj2,obj3)   // here {}=> is a target and other are sourcee

//===================================================================

console.log(Object.keys(tinderUser))   //Returns array of keys
console.log(Object.values(tinderUser))    //Returns array of values
console.log(Object.entries(tinderUser))         // returns key value pair for all entries in  obj

console.log(tinderUser.hasOwnProperty(uname))         // checks if that property exists in object