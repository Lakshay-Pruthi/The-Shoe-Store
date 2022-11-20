// wishlist starts

function wishlist(){
// document.getElementById('ProductDetailsHeading').innerHTML =  `${ProductItems[id].name}`
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
