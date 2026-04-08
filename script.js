let cart = [];
let totalPrice = 0;

function addToCart(name, price) {

cart.push({name:name, price:price});

totalPrice += price;

document.getElementById("cart-count").innerText = cart.length;

updateCart();

}

function updateCart(){

let cartItems = document.getElementById("cart-items");

cartItems.innerHTML = "";

for(let i=0;i<cart.length;i++){

let item = cart[i];

let li = document.createElement("li");

li.innerHTML = item.name + " ₹" + item.price + 
" <button onclick='removeItem("+i+")'>remove</button>";

cartItems.appendChild(li);

}

document.getElementById("total-price").innerText = totalPrice;

}

function removeItem(index){

totalPrice -= cart[index].price;

cart.splice(index,1);

document.getElementById("cart-count").innerText = cart.length;

updateCart();

}

function toggleCart(){

let cartBox = document.getElementById("cart-dropdown");

if(cartBox.style.display === "block"){

cartBox.style.display = "none";

}else{

cartBox.style.display = "block";

}

}
function goCheckout(){

if(cart.length === 0){
alert("Your cart is empty!");
return;
}

window.location.href = "order.html";

}