
const form=document.getElementById('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const income=parseFloat(document.getElementById('income').value);
    let tax=0;
    if(income<=250000){
        tax=0;
    }
    else if(income<=500000){
        tax=0.05*(income-250000);
    }
    else if(income<=1000000){
        tax=12500+0.2*(income-500000);
    }
    else{
        tax=112500+0.3*(income-1000000);
    }
    document.querySelector("h2").textContent=`Income Tax is ₹${tax.toFixed(2)}`;
    form.reset();
});

