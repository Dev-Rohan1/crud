let product_name = document.getElementById("product_name");
let product_code = document.getElementById("product_code");
let product_image = document.getElementById("product_image");
let unit_price = document.getElementById("unit_price");
let product_quantity = document.getElementById("product_quantity");
let product_total = document.getElementById("product_total");
let submit = document.getElementById("submit");

let createProduct = async () => {
  console.log();
  let URL = `http://164.68.107.70:6060/api/v1/CreateProduct/`;

  document.getElementById("loader").classList.remove("d-none");

  let res = await axios.post(URL, {
    Img: product_image.value,
    ProductCode: product_code.value,
    ProductName: product_name.value,
    Qty: product_quantity.value,
    TotalPrice: product_total.value,
    UnitPrice: unit_price.value,
  });

  document.getElementById("loader").classList.add("d-none");

  if (res.status === 200) {
    window.location = "product.html";
  }
};

submit.addEventListener("click", createProduct);
