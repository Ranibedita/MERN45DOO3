console.log("today we are going to study fatch method");
// function getData(userId,next){
//     setTimeout(()=>{
//         console.log("user id is :",userId)
//         next()
//     },2000)
// }
// getData(1,()=>{
//     getData(2)
// })

//call back hell
// getData(1,()=>{
//     getData(2,()=>getData(3,()=>getData(4,()=>getData(5))))
// });

//promises

//state
//pending
//resolve
//reject


// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("promise executed")
//         reject("reject")
//     },2000)
// })
// console.log("promise")

//promise chain

// function getUserData(userId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("user id is :",userId)
//             resolve("success")
//         },2000)
//     })

// }

// getUserData(1).then(()=>{
//     return getUserData(2).then(()=>{
//         return getUserData(3)
//     })
// })

//return from the mud
//async & await

//fetch method


// async function fetchMethod(){
// let data =await fetch("https://jsonplaceholder.typicode.com/posts");
// console.log(data)
// }
// fetchMethod()


async function fetchMethod(){
let response =await fetch("https://jsonplaceholder.typicode.com/posts");
console.log(response)

let data= await response.json()
console.log(data)

// data.array.forEach(element => {
//     console.log(element.id, element.title)
// });


}
fetchMethod()



//request

//get type
//post type
//put type
//delete type

async function fetchMethod() {

    let option = {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json; charset=UTF-8',
        },

    
}

let response =await fetch("https://jsonplaceholder.typicode.com/posts/1");
console.log(response)

let data= await response.json()
console.log(data)

}

fetchMethod()





