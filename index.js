let changeColorEle = document.getElementById("changeColor")
let mainContainerEle = document.getElementById("mainContainer")
let addChildEle = document.getElementById("addChild")
let removeChildEle = document.getElementById("removeChild")
let boxElements = document.getElementsByClassName("box1")
let changeBackColorELe = document.getElementById("changeBackColor")
addChildEle.onclick = function(){
    let boxELe = document.createElement("div")
    let boxNum = boxElements.length + 1
    boxELe.innerText = "Box "+ boxNum
    boxELe.style.height = "300px"
    boxELe.style.width = "250px"
    boxELe.style.backgroundColor = "#" + randomColor
    boxELe.style.border = "1px solid black"
    boxELe.style.textAlign = "center"
    boxELe.style.margin = "4px"
    boxELe.className = "box1"
    mainContainerEle.appendChild(boxELe)
    

}
let randomColor;

changeColorEle.onclick = function(){
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    for(let box of boxElements){
        box.style.backgroundColor = "#" + randomColor;
    }
    
}
removeChildEle.onclick = function(){
    let lastItem = mainContainerEle.lastElementChild
    mainContainerEle.removeChild(lastItem)
}
changeBackColorELe.onclick =  function(){
    let randomNum = Math.floor(Math.random()*16777215).toString(16);
    mainContainerEle.style.backgroundColor = "#" + randomNum;

}