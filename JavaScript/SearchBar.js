//Searchbar
function search(){
    const text =  document.querySelector('input').value;
   loadProd(text);
}
function loadPage(searchValue){
    document.getElementById('bannerIMG').src = `${BRAND[searchValue.toLowerCase()].imgURL}`
    loadProd(searchValue)
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