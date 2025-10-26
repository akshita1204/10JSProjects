const ele=document.getElementById("clock");
setInterval(()=>{
const time=new Date();
ele.textContent=time.toLocaleTimeString();
},1000);

