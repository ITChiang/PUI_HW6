var counterForCart = 0;

const submitOrder = () =>{
const glazeSection = document.querySelector('input[name="glaze"]:checked');
const quantitySection = document.querySelector('input[name="Quantity"]:checked');
const testing  =document.querySelector('input');
const cartText = document.getElementById('cart_text');
const gTitle = document.getElementById('Glaze-title');
const qTitle = document.getElementById('Quantity-title');
// change the color to red if users didn't select the radio button.
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