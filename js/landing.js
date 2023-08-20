
let landing = document.querySelector('.view-img')
let imgsArray = ['../imge/slide-1.jpg','../imge/slide-2.jpg','../imge/slide-3.jpg'];
let slideCount = imgsArray.length;
// console.log(slideCount)

///////////// set value to set number =
let  slideNumber = 0;
let nextBTn = document.querySelector("#next")
let prevBTn = document.querySelector("#prev")
// console.log(prevBTn)

nextBTn.onclick = nextSlide;
prevBTn.onclick = prevSlide;

function stop(){
    clearInterval(count)
}

function nextSlide(){
if(slideNumber == imgsArray.length -1){

    slideNumber = 0;

}else{

     landing.style.backgroundImage = 'url("imge/'+imgsArray[slideNumber++]+'")'
    
}

}

function prevSlide(){

if(slideNumber == 0 ){

    slideNumber = imgsArray.length -1;
}else{


     landing.style.backgroundImage = 'url("imge/'+imgsArray[slideNumber--]+'")'
    
}
    }


function countImge(){
    let randomImage = Math.floor(Math.random()* imgsArray.length);
     landing.style.backgroundImage = 'url("imge/'+imgsArray[randomImage]+'")';
}
let count = setInterval(countImge , 2000) 
