var counterForCart = 0;
var cart = {};
const submitOrder = () =>{
const glazeSection = document.querySelector('input[name="glaze"]:checked');
const quantitySection = document.querySelector('input[name="Quantity"]:checked');
const productName = document.getElementsByClassName('product-name');
const productPrice = document.getElementsByClassName('product-price');
const testing  =document.querySelector('input');
const cartText = document.getElementById('cart_text');
const gTitle = document.getElementById('Glaze-title');
const qTitle = document.getElementById('Quantity-title');

// change the color to red if users didn't select the radio button.

const userCart = {};

if(glazeSection){
    gTitle.innerHTML = "Glaze:";
    gTitle.style.color = "black";
}else{
    gTitle.innerHTML = "Glaze: - is required";
    gTitle.style.color = "red";
}
if(quantitySection){
    qTitle.innerHTML = "Quantity:";
    qTitle.style.color = "black";
}else{
    qTitle.innerHTML = "Quantity: - is required";
    qTitle.style.color = "red";
}

if(glazeSection!==null&&quantitySection!==null){
// if users select both section then add one to the cart
 counterForCart+=1;
 const popOut = document.getElementsByClassName('pop_out_screen');
 cartText.innerHTML = `CART(${counterForCart.toString()})`;console.log(popOut);
 popOut[0].style.visibility = "visible";

let tmpCart = {'product':productName[0].textContent,'glaze':glazeSection.value,'quantity':quantitySection.value,'price':productPrice[0].textContent};
let randomId = (Math.floor(Math.random()*100000)).toString();
cart[randomId] = tmpCart;
let cartData = sessionStorage.getItem("cart"); // to get sessiondata to display the item in cart
let cartDataObj = JSON.parse(cartData);  // get old data
cart = {...cart,...cartDataObj};
console.log(cart,"and",cartDataObj);
let objToJson = JSON.stringify(cart);

sessionStorage.setItem("cart",objToJson);


}else{
//  Add some alert in future
}

} 


const closePopOut = ()=>{

    // close the pop out page
    const popOut = document.getElementsByClassName('pop_out_screen');

    // set the visibility to hidden
    popOut[0].style.visibility = "hidden";
}

const kcalMenu = { // the object for each glaze's cal
    "none":0,
    "Suger-milk":300,
    "Double-chocolate":160,
    "Vanilla-milk":350
}

const changeKcal = ()=>{
    const glazeSection = document.querySelector('input[name="glaze"]:checked');
    const kcal = document.getElementsByClassName("kcal");
    // add the selected kcal to the base cal of the bum.
    kcal[0].innerHTML = (kcalMenu[glazeSection.value]+600).toString() + " Kcal";
}