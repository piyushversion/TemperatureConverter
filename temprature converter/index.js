const inp = document.getElementById("input")
const buton = document.getElementById("btnn")
const display = document.getElementById("disp")

inp.addEventListener("focus",()=>{

    display.innerText = "";
    inp.value = "";
})

buton.addEventListener('click',()=>{

    display.innerText = ((inp.value)*1.8)+32;
})