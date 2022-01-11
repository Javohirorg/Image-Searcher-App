const box = document.querySelector(".main-box");
const help = document.querySelector(".help");
const search = document.querySelector("#search");

const ItemList = ['alone', 'boy', 'dog', 'home', 'love', 'other', 'place', 'shelby'];

search.addEventListener("input",(e)=>{
    if(ItemList.includes(e.target.value.toLowerCase())){
        help.style.opacity = "0";
        let i = ItemList.indexOf(e.target.value.toLowerCase());
        let  imgNum = [`<img src = "./images/${e.target.value.toLowerCase()}1.jpg" class = "box-img"/>`, `<img src = "./images/${e.target.value.toLowerCase()}2.jpg" class = "box-img"/>`, `<img src = "./images/${e.target.value.toLowerCase()}3.jpg" class = "box-img"/>` ,`<img src = "./images/${e.target.value.toLowerCase()}4.jpg" class = "box-img"/>` ,`<img src = "./images/${e.target.value.toLowerCase()}5.jpg" class = "box-img"/>` ,`<img src = "./images/${e.target.value.toLowerCase()}6.jpg" class = "box-img"/>`, `<img src = "./images/${e.target.value.toLowerCase()}7.jpg" class = "box-img"/>`, `<img src = "./images/${e.target.value.toLowerCase()}8.jpg" class = "box-img"/>`, `<img src = "./images/${e.target.value.toLowerCase()}9.jpg" class = "box-img"/>`, `<img src = "./images/${e.target.value.toLowerCase()}10.jpg" class = "box-img"/>`];
        box.innerHTML = imgNum.map(num => {return (num)},{documentation: 'randomObject'});
        console.clear();
    }
    else{
        box.innerHTML = ''; 
        help.style.opacity = "1";
        console.clear();
    }
})


const loadBox = document.querySelector(".load");

window.addEventListener("load", () =>{
    loadBox.style.display = "none";
})