
let product = fetch("Products.json");
let iHTML = document.getElementById('products');
let ProductItems = undefined
product.then((val)=>{
    return val.json()
}).then((values)=>{
    ProductItems = values;
    for(elem in values){
        iHTML.innerHTML += 
        `<div>
        <ion-icon id = "${elem}" class="pl-3 text-slate-500 mb-[-40px]" onclick="addToWishlist(id)" name="heart"></ion-icon>
        <img  src="${values[elem].imgURL}" alt="">
        <div class="flex items-center justify-between">
        <p class="font-semiboldbold">${values[elem].name}</p>
        <p class="">${values[elem].price}</p>
        </div>
        </div>`
    }
})


//    Side Drawer
   let sidedrawer =  document.getElementById('sideDrawer')
   let sideDrawerButton = document.getElementById('sideDrawerButton')

   function sideDrawer(){
    if(sidedrawer.style.right == "0px"){
    sidedrawer.style.right = "-250px"
    sideDrawerButton.style.transform = "rotateY(0deg)"
    document.getElementById('products').style.pointerEvents = "all"
   }else{
    sidedrawer.style.right = "0px"
    sideDrawerButton.style.transform = "rotateY(180deg)"
    document.getElementById('products').style.pointerEvents = "none"
   }
   
}
//    Side Drawer ends

// wishlist starts

function wishlist(){
    document.getElementById('container').style.display = 'none'
    document.getElementById('wishlist').style.display = 'block'
}

function home(){
    document.getElementById('container').style.display = 'block'
    document.getElementById('wishlist').style.display = 'none'
}

function addToWishlist(id){

    let selectedElem = document.getElementById(id);
    let prod = document.getElementById('wishlist-products')
    let msg = document.getElementById('messages');

if(selectedElem.style.color != "red"){
    selectedElem.style.color = 'red'
    let elem = document.createElement('div');
    elem.innerHTML = `<img src ="${ProductItems[id].imgURL}"><p>${ProductItems[id].name}<br>${ProductItems[id].price}`
    elem.classList.add("wishlist-product")
    elem.id = "w" + id
    prod.appendChild(elem)

    msg.innerHTML = "Item added to wishlist✅"
    msg.style.bottom = "0px"

    setTimeout(() => {
    msg.style.bottom = "-50px"
    }, 1500);

}else{
    document.getElementById("w" + id).remove()
      selectedElem.style.color = "rgb(100 116 139)"
    }
}



// wishlist ends

//Searchbar
function search(){
    const text =  document.querySelector('input').value;
   loadProd(text);
}

function loadProd(searchValue){
    const text = searchValue
    let iHTML = document.getElementById('products');
      
    iHTML.innerHTML = "";
    for(elem in ProductItems){
        if(ProductItems[elem].brand.toLowerCase().includes(text.toLowerCase())){
        iHTML.innerHTML += 
        `<div>
        <ion-icon id = "${elem}" class="pl-3 text-slate-500 mb-[-40px]" onclick="addToWishlist(id)" name="heart"></ion-icon>
        <img  src="${ProductItems[elem].imgURL}" alt="">
        <p class="text-center mt-[-25px]">${ProductItems[elem].name}</p>
        <p class="text-center">${ProductItems[elem].price}</p>
        </div>`
        }
    }

}