let imgFrom1 = document.querySelector("#photo1");
let imgFrom2 = document.querySelector("#photo2");
let imgFrom3 = document.querySelector("#photo3");
let imgFrom4 = document.querySelector("#photo4");
let imgFrom5 = document.querySelector("#photo5");
let imgFrom6 = document.querySelector("#photo6");
let orders = document.querySelector("#orders");
let totalPrice = 0;
const contentBefore = document.querySelector("#contentBefore");


const inputname=document.querySelector("#inputname");
const inputaddress=document.querySelector("#inputaddress");
let names=document.querySelector("name");
let address=document.querySelector("address");

let customerAddress=inputaddress.value;
let customerName=inputname.value;

function addDetails(){

console.log(customerAddress);
console.log(customerName);

}

// function 1
function addOrder(itemName, priceOfOrder) {
  contentBefore.remove();

  const orderDescription = document.createElement("div");
  orderDescription.className = "orderDescription";
  orders.append(orderDescription);

  const orderImage = document.createElement("div");
  orderImage.id = "orderImage1";
  orderImage.className = "orderImage";
  orderDescription.append(orderImage);

  let img = document.createElement("img");
  img.id = "img1";
  if (itemName == "burger") {
    img.src = imgFrom1.src;
    orderImage.append(img);
  } else if (itemName == "king bucket") {
    img.src = imgFrom2.src;
    orderImage.append(img);
  } else if (itemName == "streetwise 2") {
    img.src = imgFrom3.src;
    orderImage.append(img);
  } else if (itemName == "milkshake") {
    img.src = imgFrom4.src;
    orderImage.append(img);
  } else if (itemName == "krusher") {
    img.src = imgFrom5.src;
    orderImage.append(img);
  } else if (itemName == "streetwise 3") {
    img.src = imgFrom6.src;
    orderImage.append(img);
  }

  const est = document.createElement("div");
  est.id = "est";
  orderDescription.append(est);

  const esTimeHead = document.createElement("p");
  esTimeHead.id = "esTimeHead";
  esTimeHead.textContent = "est.time";
  est.append(esTimeHead);

  const esTimeContent = document.createElement("p");
  esTimeContent.id = "esTimeContent";
  if (itemName == "burger") {
    esTimeContent.textContent = "5min";
    est.append(esTimeContent);
  } else if (itemName == "king bucket") {
    esTimeContent.textContent = "7min";
    est.append(esTimeContent);
  } else if (itemName == "streetwise 2") {
    esTimeContent.textContent = "5min";
    est.append(esTimeContent);
  } else if (itemName == "milkshake") {
    esTimeContent.textContent = "4min";
    est.append(esTimeContent);
  } else if (itemName == "krusher") {
    esTimeContent.textContent = "3min";
    est.append(esTimeContent);
  } else if (itemName == "streetwise 3") {
    esTimeContent.textContent = "8min";
    est.append(esTimeContent);
  }

  const orderName = document.createElement("p");
  orderName.id = "orderName1";
  orderName.textContent = itemName;
  orderImage.append(orderName);

  const orderPrice = document.createElement("div");
  orderPrice.id = "orderPrice1";
  orderPrice.className = "orderPrice";
  orderDescription.append(orderPrice);

  const price = document.createElement("div");
  price.className = "price";
  orderPrice.append(price);

  const pPrice = document.createElement("p");
  pPrice.textContent = "price";
  price.append(pPrice);

  const span = document.createElement("span");
  span.textContent = priceOfOrder;
  price.append(span);

  const total = document.createElement("div");
  total.id = "total";
  total.className = "total";
  orderDescription.append(total);

  const pTotal = document.createElement("p");
  pTotal.id = "pTotal";
  pTotal.textContent = "total";
  total.append(pTotal);

  const totalTotal = document.createElement("p");
  totalTotal.id = "totalTotal";
  totalPrice = totalPrice + priceOfOrder;
  totalTotal.textContent = "M" + totalPrice;
  total.append(totalTotal);
}
