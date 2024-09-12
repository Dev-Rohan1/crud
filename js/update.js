let fillExistingData = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  document.getElementById("loader").classList.remove("d-none");

  let URL = `http://164.68.107.70:6060/api/v1/ReadProductByID/${id}`;

  let res = await axios.get(URL);

  document.getElementById("loader").classList.add("d-none");

  console.log(res);

  if (res.status === 200) {
    let items = res.data["data"][0];

    document.getElementById("product_id").value = items["_id"];
    document.getElementById("product_name").value = items["ProductName"];
    document.getElementById("product_code").value = items["ProductCode"];
    document.getElementById("product_image").value = items["Img"];
    document.getElementById("unit_price").value = items["UnitPrice"];
    document.getElementById("product_quantity").value = items["Qty"];
    document.getElementById("product_total").value = items["TotalPrice"];
  }
};

async function update() {
  let ProductID = document.getElementById("product_id").value;
  let ProductName = document.getElementById("product_name").value;
  let ProductCode = document.getElementById("product_code").value;
  let ProductImg = document.getElementById("product_image").value;
  let UnitPrice = document.getElementById("unit_price").value;
  let ProductQty = document.getElementById("product_quantity").value;
  let ProductTotal = document.getElementById("product_total").value;

  let URL = `http://164.68.107.70:6060/api/v1/UpdateProduct/${ProductID}`;

  document.getElementById("loader").classList.remove("d-none");

  let res = await axios.post(URL, {
    Img: ProductImg,
    ProductCode: ProductCode,
    ProductName: ProductName,
    Qty: ProductQty,
    TotalPrice: ProductTotal,
    UnitPrice: UnitPrice,
  });

  document.getElementById("loader").classList.add("d-none");

  if (res.status === 200) {
    window.location = "product.html";
  } else {
    alert("error");
  }
}

fillExistingData();
