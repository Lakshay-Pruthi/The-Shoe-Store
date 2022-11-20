let product = fetch("Products.json");

let iHTML = document.getElementById('products');
let ProductItems = undefined
product.then((val)=>{
    return val.json()
}).then((values)=>{
    ProductItems = values;
    for(elem in values){
        iHTML.innerHTML += 
        `<div onclick="details(${elem})">
        <ion-icon id = "${elem}" class="pl-3 text-slate-500 mb-[-40px]" onclick="addToWishlist(id)" name="heart"></ion-icon>
        <img  src="${values[elem].imgURL}" alt="">
        <div class="flex justify-between">
        <p class="font-semiboldbold">${values[elem].name}</p>
        <p class="">${values[elem].price}</p>
        </div>
        </div>`
    }
})

let BRAND = fetch("Brands.json");
BRAND.then((val)=>{
    return val.json();
}).then((values)=>{
    BRAND = values;
})

let size = [1,2,3,4,5,6,7,8,9,10,11,12];
let colors = ["White","Yellow","Blue","Red","Green","Black","Brown","Azure","Ivory","Teal","Silver","Purple","Navy blue","Pea green","Gray","Orange","Maroon","Charcoal","Aquamarine","Coral","Fuchsia","Wheat","Lime","Crimson","Khaki","Hot pink","Magenta","Olden","Plum","Olive","Cyan"]

sizeHtml = document.getElementById('sizeFilter');
for(i in size){
    sizeHtml.innerHTML +=  `<li>${size[i]}</li><hr>`
}

colorHtml = document.getElementById('colorFilter');

for(i in colors){
    colorHtml.innerHTML += `<li>${colors[i]}</li><hr>`
}

