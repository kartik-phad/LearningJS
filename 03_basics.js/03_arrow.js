// const user = {
//     username : "kartik",
//     price : 121,

//     welocomeMessage: function(){
//         console.log(`${this.username} , welcome to website`)    //this refers to current context
//         console.log(this)           //prints current context
//     }
// }

// user.welocomeMessage()
// user.username = "sam"
// user.welocomeMessage()

// console.log(this)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function chai(){
//     let username = "kartik"
//     console.log(this.username)          // this cannot be used with the functions but objects
// }

// chai()  //  => undefined

///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const chai = () => {
    let username = "kartik"
    console.log(this.username)          // this cannot be used with the functions but objects
}

chai()  //  => undefined
