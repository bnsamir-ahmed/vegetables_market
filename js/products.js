//////////////////////Show Products/////////////////////
let products = [{
    id: 1,
    img:"./imge/product-1-220x160.png",
    title:"bananas",
    price:23,
    kind:'FRUITS',
},

{
     id: 2,
    img:"./imge/product-2-191x132.png",
    title:"potatoes",
    price:23,
    kind:'VEGETABLES',
},

{
     id: 3,
    img:"./imge/product-3-238x158.png",
    title:"carrots",
    price:23,
    kind:'VEGETABLES',
},
{
     id: 4,
    img:"./imge/product-7-210x168.png",
    title:"sweet peppers",
    price:23,
    kind:'VEGETABLES',
},
{
     id: 5,
    img:"./imge/product-4-204x125.png",
    title:"bread",
    price:23,
    kind:'BREAD',
},
{
     id: 6,
    img:"./imge/product-5-204x156.png",
    title:"strawberries",
    price:23,
    kind:'FRUITS',
},
{
     id: 7,
    img:"./imge/product-6-237x156.png",
    title:"cucumbers",
    price:23,
    kind:'VEGETABLES',
},
{
     id: 8,
    img:"./imge/product-8-210x133.png",
    title:"bagels",
    price:23,
    kind:'BREAD',
}



]


localStorage.setItem('products' , JSON.stringify(products));


let all = document.querySelector(".all-product");


let valI ;

let targetItem = [];
let draw;
(draw =  function (products){
    let UI = products.map((item) =>{
        return`
        <div class = 'store-Item' data-kind="${item.kind}">
  <img src="${item.img}" class="img-fluid" alt="..." >
  <div class="">
    <h5 class="text-uppercase fw-bold py-3">${item.title}</h5>
    <h6 class=" price p-3">${ "$"+item.price}</h6>
    <div class="btn-product">
     <a><i class="fa-solid fa-magnifying-glass search icon-card  "></i></a>
      <a>  <i class="fa-solid fa-cart-shopping  icon-shop"></i></a></div>
   
        
  </div>
        </div>
        
 

        
        
        `

    })

    all.innerHTML = UI.join("");
})((JSON.parse(localStorage.getItem('products'))))



let ALL =document.querySelector("#ALL")
let VEGETABLES =document.querySelector("#VEGETABLES")

let FRUITS =document.querySelector("#FRUITS")

let BREAD =document.querySelector("#BREAD")

let ge =  document.querySelectorAll(".store-Item")
ALL.onclick = AL;
VEGETABLES.onclick = veG;
FRUITS.onclick = frU;
BREAD.onclick = brE;


function AL(){
ge.forEach((i) =>{
     i.style.display = 'block'
    

})
}


function veG(){
ge.forEach((i) =>{
    let a = i.dataset;
    if(a.kind == "VEGETABLES")
    {
     i.style.display = 'block'
    
        // i.style.opacity = '1'
    }else{
     i.style.display = 'none'

        // i.style.opacity ="0"
    }

})
}


function frU(){
ge.forEach((i) =>{
    let a = i.dataset;
    if(a.kind == "FRUITS"){
        i.style.display = 'block'
    }else{
        i.style.display ="none"
    }

})}

function brE(){
ge.forEach((i) =>{
    let a = i.dataset;
    if(a.kind == "BREAD"){
        i.style.display = 'block'
    }else{
        i.style.display ="none"
    }

})}