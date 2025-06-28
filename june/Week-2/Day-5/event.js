// event handling

// let btn=document.querySelector("button");
// console.log(btn)

// btn.onclick=()=>{
//     alert("button clicked");
// }
// btn.onkeyup=()=>{
//     alert("button clicked using key")
// }

// let input=document.querySelector("input")
// console.log(input)

// input.unchange=(e)=>{
//     console.log("input value is",e.target.value)
// }

let butt =document.querySelector("form button");
butt.addEventListener("click",()=>{
    let input=document.querySelector("form input");
    console.log(input.value)
    localStorage.setItem("name",input.value);
})



document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()
})

//create a element

let div=document.querySelector("box");
let p=document.createElement("p");
p.innerText="this is child paragraph";
console.log(p)
div.appendChild(p)
