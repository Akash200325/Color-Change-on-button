const getColor=()=>{
    const randomnum=Math.floor(Math.random()*16777215);
    const randomcode="#"+ randomnum.toString(16);
    document.body.style.background=randomcode;
    document.getElementById("color-code").innerText=randomcode;
    navigator.clipboard.writeText(randomcode)
}
document.getElementById("btn").addEventListener(
   "click",
   getColor 
)
getColor();