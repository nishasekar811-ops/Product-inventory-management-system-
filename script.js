let products = [];

function addProduct() {

let name = document.getElementById("productName").value;
let qty = document.getElementById("productQty").value;

let product = {
name: name,
quantity: qty
};

products.push(product);

displayProducts();
}

function displayProducts(){

let list = document.getElementById("productList");
list.innerHTML = "";

products.forEach(function(product){

let li = document.createElement("li");
li.textContent = product.name + " - " + product.quantity;

list.appendChild(li);

});
}
