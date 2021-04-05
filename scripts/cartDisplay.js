const displayCart =()=>{
    console.log("trigger");
    let cartData = sessionStorage.getItem("cart"); // to get sessiondata to display the item in cart
    let cartDataObj = JSON.parse(cartData); 
    if(cartData==null)return;
    let div = document.getElementById("cart_display_area"); // get dom of display area
    let amountDiv = document.getElementById("cart_amount_area"); // get dom of display area
    let totalAmount = 0; // count the total amount of price
    let displayData = "";
    let itemCount = 0; // count the total amount of item in cart

    for(let i in cartDataObj ){
        console.log(cartDataObj[i],cartDataObj,i)
        let getPrice = cartDataObj[i]["price"].split("$")[1];
        itemCount++;
        totalAmount+=Number.parseFloat(getPrice*cartDataObj[i]["quantity"]);
        displayData+=` <div class="cart_item">
        <img class="small-pic" src="images/${cartDataObj[i]["product"]}.png" alt='bum pic'>
        <div class="cart_item_price">
        <div style="font-size:1.5rem;text-align: left;">${cartDataObj[i]["product"]}-${cartDataObj[i]["glaze"]} </div>
        <button class="delete-btn" onclick="removeItem()" data-idOfProduct=${i.toString()} > x </button>
        <div style="margin-top: 10vh; font-size: 1.3rem;width: 100%;text-align:left;">
            <span >$${getPrice} x ${cartDataObj[i]["quantity"]}</span><span style="margin-left: 25vw;">$${
                Number.parseFloat(getPrice*cartDataObj[i]["quantity"]).toFixed(2)} </span>
        </div>
        </div>
    </div>`
    }

    document.getElementById('cart_icon_display').innerHTML = `CART (${itemCount})`;
    div.innerHTML = displayData;
    amountDiv.innerHTML = `
    <ul>
    <div class = "sub_text">
        <span>SUBTOTAL:</span><span class="alright">$${Number.parseFloat(totalAmount).toFixed(2)}</span>
    </div>
    <div class = "sub_text">
        <span>TAX</span><span class="alright">$${Number.parseFloat(totalAmount*0.1).toFixed(2)}</span>
    </div>
    <div class = "sub_text">
        <span>ORDER TOTAL</span><span class="alright">$${Number.parseFloat(totalAmount*1.1).toFixed(2)}</span>
    </div>
</ul>
`

}
const removeItem =()=>{
const getIdNumber = event.target.dataset.idofproduct; // get the data-id of product
let cartData = sessionStorage.getItem("cart"); // to get sessiondata to display the item in cart
let cartDataObj = JSON.parse(cartData); 
delete cartDataObj[getIdNumber]; // delete the target product by using id
let objToJson = JSON.stringify(cartDataObj);
sessionStorage.setItem("cart",objToJson);
displayCart(); // render again with new data
}

const checkout =()=>{
    sessionStorage.removeItem("cart"); // remove everything in the cart
}