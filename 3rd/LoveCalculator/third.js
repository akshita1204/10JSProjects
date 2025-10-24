
const form =document.querySelector('form');
form.addEventListener("submit", (e)=>{
    const boy=document.getElementById('boy').value;
    const girl=document.getElementById('girl').value;

    const l1=boy.length;
    const l2=girl.length;

    const sum=l1+l2;
    const lovePercent=(Math.pow(sum,3))%101; 
    document.querySelector('h2').textContent=`Love Percentage is ${lovePercent}%`;
    e.preventDefault();
    form.reset();
});