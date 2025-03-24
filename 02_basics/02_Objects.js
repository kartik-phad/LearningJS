
//literals => [WAYS TO CREATE OBJECT]
 
    //1
const myObj ={
    name : "kartik",
    age : 21,
    email : "kartik@git.com",
    isLoggedin : true,
    LastLoggedin : ["monday" , "wednesday" , "friday"]
    [Symbol] = "mykey",
    [mySym]: "mykey1",
    // way 1 to create function in obj
    greetings : function(){
        console.log(`hello user ${this.name}`);
    }
    
}

// WAYS TO ACCES OBJECT

    // //PREFERRED
    // console.log(myObj["isLoggedin"])
    // console.log(myObj["name"])
    // console.log(myObj["age"])

    // //2nd way
    // console.log(myObj.LastLoggedin)

// declare function in object

    myObj.greetings2 = function(){
        console.log(`my ags is ${this.age}`)        //this is used to refer object propertites
    }
// call function
    myObj.greetings()
    myObj.greetings2()

    console.log(myObj.greetings());

//--------------------------------------------------------------------------------------------
    JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)                values cannot be modifed in obj after freezing
    myObj.email = "hitesh@microsoft.com"
// console.log(JsUser);

    