
$(document).ready(function(){

$(".page-text").click(function(){
    $(".page").fadeToggle(2000);
})

$(".page-blog").click(function(){

$(".page-grid").fadeToggle(2000);

})

$(".welcome").animate({
    left:""
})

$(".search").click(function(){
    $(".home-search").slideToggle(1000);
})


$(".close-btn").click(function(){
    $(".home-search").slideUp(1000);
})

})

let navMob = document.querySelector(".nav-mob")
let mob = document.querySelector(".ul-mob");
// console.log(navMob)

navMob.addEventListener("click" ,function(){

// mob.style.left = "0";




if( mob.style.display === 'block'){
        mob.style.display ='none';

}else {
        mob.style.display ='block';
}


})