
const result=document.getElementById("res");

const olympicdate=new Date("October 27, 2025 00:00:00").getTime();


const interval=setInterval(()=>{
    const curtime=new Date().getTime();
    const diff=olympicdate-curtime;

    
    if (diff <= 0) {
        clearInterval(interval);
        result.textContent = "Countdown Finished!";
        return;
    }

    let totalSeconds=Math.floor(diff/1000);
    const days=Math.floor(totalSeconds/(3600*24));
    const hours=Math.floor((totalSeconds%(3600*24))/3600);
    const minutes=Math.floor((totalSeconds%3600)/60);
    const seconds=totalSeconds%60;
    result.textContent=`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
},1000);

   

