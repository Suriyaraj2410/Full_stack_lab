const form = document.getElementById("form");
const data = [];
const product = {};
const display=document.querySelector(".display")
display.innerHTML=""
var i = 0;

document.addEventListener("submit", (event) => {
  event.preventDefault();

  const productname = document.getElementById("product_name").value;
  const productid = document.getElementById("product_id").value;
  const productimage = document.getElementById("product_image").value;
  addtoproduct(productname, productid, productimage);
  form.reset();
});

function addtoproduct(a, b, c) {

  if (data.includes(a)) {
    alert(a + "is available");
  } else {
    data.push(a);
    product[i++] =  { productname: a, prodcutid: b, productimage: c };
    console.log(product);
    var card=document.createElement("div")
    card.innerHTML=`<div class="card"  style="width: 18rem;">
    <button onclick="del(event)" id=${b}>delete</button>
    <img class="card-img-top" src=${c} alt="Card image cap">
    <div class="card-body" >
      <h5 class="card-title">${a}</h5>
      <p class="card-text">${b}</p>
    </div>
  </div>`
  display.appendChild(card)
 
  }
}


function del(e){

console.log(e.target.parentNode.remove())

}