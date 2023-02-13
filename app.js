console.log("hello")
console.log("hi")
const header= document.getElementById("main-header")
header.style.border="2px solid black"
const addItem = document.getElementsByClassName("title")
addItem[0].style.fontWeight="Bold"
addItem[0].style.color="#008000"
// const items= document.getElementsByClassName("list-group-item")
// items[2].style.backgroundColor="#008000"
// for(let i=0 ;i<items.length;i++){
//     items[i].style.fontWeight="bold"
// }
const li = document.getElementsByTagName("li")
li[2].style.backgroundColor="#008000"
for(let i=0 ;i<li.length;i++){
    li[i].style.fontWeight="bold"
}