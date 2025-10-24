

const parent=document.getElementById('parent');
parent.addEventListener("click", (e)=>{
    const child=e.target;
    const body=document.body;
    body.style.backgroundColor=child.style.backgroundColor;
})

