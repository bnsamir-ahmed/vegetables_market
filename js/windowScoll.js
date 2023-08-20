    
// //select about
let about = document.querySelector(".about-us");
// console.log(ourSkills)
let btnUp = document.querySelector(".btn-up");


function show(){
   btnUp.style.visibility ='visible';
}


function hide(){
  btnUp.style.visibility ='hidden';
}
///////////////////

let serviCe = document.querySelector(".service-card");

let offers = document.querySelector('.offers');
// console.log(offers)
// console.log(serviCe)
window.addEventListener("scroll" , () =>{
// to take size window scroll
let topWidow = about.getBoundingClientRect().top;
// console.log(topWidow)
// size window
let hightWindow = window.innerHeight;
let topService = serviCe.getBoundingClientRect().top;
// console.log(hightWindow)
let topOffers = offers.getBoundingClientRect().top;
// console.log(topOffers)
if(topWidow <= hightWindow){
    show();
}else{
    hide();
}
if ( topService <= hightWindow  ){
    serviCe.style.display = 'block'
}else{
    serviCe.style.display = 'none'
}

})

btnUp.addEventListener('click' , function(){
    window.scrollTo(0,0);
})
