
let sidePos = 0;
let slides = document.getElementsByClassName("carousel__items")
// console.log(slides)
let totalSlide = slides.length;
// console.log(totalSlide)


document.getElementById('carousel__btn--next')
.addEventListener("click" , function (){


    moveToNext()
})

document.getElementById('carousel__btn--prev')
.addEventListener("click" , function (){
    moveToPrev()

})




function updatePosition(){
    for(let slide of slides){
slide.classList.remove('carousel__items--visibale')
slide.classList.add('carousel__items--hidden')
    }
    slides[sidePos].classList.add('carousel__items--visibale');
}






function moveToNext(){
if(sidePos === totalSlide -1){
    sidePos = 0;
}else{
    sidePos++;
}
updatePosition()


}



function moveToPrev(){
    if(sidePos === 0){
        sidePos = totalSlide -1;
    }else{
        sidePos--;
    }
    updatePosition()

}

///////////////////////////////////////////////////////

let parent = document.querySelector(".topPatent")
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")


parent.addEventListener("wheel" , (e) =>{
    // console.log(e.pageX)
    e.preventDefault();
    parent.scrollLeft += e.deltaY;
})

backBtn.addEventListener("click", ()=>{
    parent.style.scrollBehavior = "smooth"

 parent.scrollLeft -= 398;
})

nextBtn.addEventListener("click", ()=>{
    parent.style.scrollBehavior = "smooth"
     parent.scrollLeft +=398;
parent})






//////////////////////FAQ
 let doC = document.querySelector("i.what")
 let coR = document.querySelector(".p-faq")
 console.log(coR)
 doC.addEventListener("click" , function (e) {
    e.preventDefault;
    if(coR.style.display == "block" ){
coR.style.display = "none"
}else{
coR.style.display = "block"

}

 })

 ////////////////////////FAQ









 
let sideNum = 0;
let slideParent = document.getElementsByClassName("PARENT_carousl")
// console.log(slides)
let totalNumSlide = slideParent.length;
// console.log(totalNumSlide)


document.getElementById('PARENT__btn--next')
.addEventListener("click" , function (){
// console.log("llll")

    moveToNextImg()
})

document.getElementById('PARENT__btn--prev')
.addEventListener("click" , function (){
    moveToPrevImg()

})




function updatePositionSlide(){
    for(let IMG of slideParent){
IMG.classList.remove("PARENT_carousl--visib")
IMG.classList.add('.PARENT_carousl--hidden')
    }
    slideParent[sideNum].classList.add('.PARENT_carousl--visib');
}






function moveToNextImg(){
if(sideNum === totalNumSlide -1){
    sideNum = 0;
}else{
    sideNum++;
}
updatePositionSlide()


}



function moveToPrevImg(){
    if(sideNum === 0){
        sideNum = totalNumSlide -1;
    }else{
        sideNum--;
    }
    updatePositionSlide()

}