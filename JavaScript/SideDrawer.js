//    Side Drawer
let sidedrawer =  document.getElementById('sideDrawer')
let sideDrawerButton = document.getElementById('sideDrawerButton')

function sideDrawer(){
 if(sidedrawer.style.right == "0px"){
    document.getElementsByTagName('body')[0].style.overflowY = "scroll";
 sidedrawer.style.right = "-250px"
 sideDrawerButton.style.transform = "rotateY(0deg)"
 document.getElementById('products').style.pointerEvents = "all"
}else{
document.getElementsByTagName('body')[0].style.overflowY = "hidden";
 sidedrawer.style.right = "0px"
 sideDrawerButton.style.transform = "rotateY(180deg)"
 document.getElementById('products').style.pointerEvents = "none"
}

}
//    Side Drawer ends

function sort(){
    
    ProductItems.sort(function(a,b){
        return ProductItems[a].price - product[b].price
    })
    loadProd("");
}