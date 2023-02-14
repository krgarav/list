// console.log("hello")
// console.log("hi")
// const header= document.getElementById("main-header")
// header.style.border="2px solid black"
// const addItem = document.getElementsByClassName("title")
// addItem[0].style.fontWeight="Bold"
// // addItem[0].style.color="#008000"
// // const items= document.getElementsByClassName("list-group-item")
// // items[2].style.backgroundColor="#008000"
// // for(let i=0 ;i<items.length;i++){
// //     items[i].style.fontWeight="bold"
// // }
// // const li = document.getElementsByTagName("li")
// // // li[2].style.backgroundColor="#008000"
// // for(let i=0 ;i<li.length;i++){
// //     li[i].style.fontWeight="bold"
// // }
// const item2= document.querySelector(".list-group-item:nth-child(2)");
// item2.style.backgroundColor="#00FF00"
// const item3 = document.querySelector(".list-group-item:nth-child(3)");
// item3.style.display="none" 

// console.log(typeof item2)
// //Queryselectorall
// const items=document.querySelectorAll("li")
// items.forEach(key=>{
//    if(key.textContent=="Item 2"){
//      key.style.color="green"
//    }

// })
// console.log(typeof items)

// for(let i=0;i<items.length;i++){
//     if(i%2==0){
//         items[i].style.backgroundColor="#7CFC00"
//     }
    
// }
// // for (const itr in items) {
// //     console.log(itr)
// // }
var newp= document.createElement("p")
newp.textContent="Helo"
console.log(newp)
const add = document.querySelector("div")
const h1 = document.querySelector("h1")
add.insertBefore(newp,h1)

const items = document.querySelector("ul") 
const Item1 = document.querySelector("li")
var newli = document.createElement("li")
newli.textContent="Hello"
newli.className="list-group-item"
items.insertBefore(newli,Item1)
