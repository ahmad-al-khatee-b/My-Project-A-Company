const actions = document.getElementById('actions');
const menu = document.getElementById('menu');
let btn =document.getElementById('btn');

window.onscroll= function(){
    if (this.scrollY >= 400){
        btn.style.display = 'block';
    }else{
        btn.style.display = 'none';
    }
}
btn.onclick =function(){
   scroll({
      left:0, 
      top:0,
      behavior:'smooth'
    })
}

menu.addEventListener("click", ()=>{
         handelmenu();
})


function handelmenu (){
   
menu.classList.toggle("is-active");
actions.classList.toggle("is-active");
}

