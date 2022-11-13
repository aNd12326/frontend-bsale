// back deploy url
const url = "https://bsale-back.onrender.com";

//adding spinner while data is loading
let productosLista = document.querySelector("#spinner");
productosLista.innerHTML = `
  <div class="text-center fs-1">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <h1>Please Wait</h1>
    <h1>loading products....</h1>
  </div>
  `;
productosLista = document.querySelector("#all-products");

// fetching all products
const getAllProducts = () => {
  fetch(`${url}/api/products`)
    .then((resp) => resp.json())
    .then((data) => {
      // storing product data in the browser
      localStorage.setItem("products", JSON.stringify(data));
      // removing the spinner
      document.querySelector("#spinner").remove();
      if (data.length > 0) {
        productosLista.innerHTML = "";
        data.map((product) => {
          productosLista.innerHTML += `
          <div class="col" id="test-col">
            <div class="card border-danger h-100" style="width: 18rem">
                <img
                  src="${product.url_image}"
                  class="card-img-top img-thumbnail"
                  alt="${product.name}"
                />
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">$${product.price}</p>
                </div>
            </div>
          </div>
          `;
        });
      } else {
        productosLista.innerHTML = `
        <div class="alert alert-danger" role="alert">
          Product not found
        </div>
      `;
      }
    });
};
getAllProducts();

// form search bar
let form = document.querySelector("#searchByQuery");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const dataName = formData.get("name");

  fetch(`${url}/api/products?name=${dataName}`)
    .then((resp) => resp.json())
    .then((data) => {
      let searchProducts = "";
      if (data.length > 0) {
        data.map((product) => {
          searchProducts += `
            <div class="col" id="test-col">
                <div class="card border-dark h-100" style="width: 18rem">
                    <img
                      src="${product.url_image}"
                      class="card-img-top img-thumbnail"
                      alt="${product.name}"
                    />
                    <div class="card-body">
                      <h5 class="card-title">${product.name}</h5>
                      <p class="card-text">$${product.price}</p>
                    </div>
                </div>
              </div>
            `;
        });
        document.getElementById("all-products").innerHTML = searchProducts;
      } else if (data.length === 0) {
        document.getElementById("all-products").innerHTML = `
        <div class="alert alert-danger" style="width: 100% !important" role="alert">
          Product not found
        </div>
        `;
      }
    });
  form.querySelector('input[name="name"]').value = "";
});

// -------------------------------- filter By Category ---------------;
const filterCategoryNames = () => {
  fetch(`${url}/api/categories`)
    .then((response) => response.json())
    .then((data) => {
      let categoryNames = "";
      data.map((category) => {
        categoryNames += `
        <li class="nav-item p-1">
          <button class="btn btn-warning" id=${category.id} onclick="filterByCategory(${category.id})">${category.name}</button>
        </li>
        `;
      });
      document.getElementById("categories").innerHTML = categoryNames;
    });
};
filterCategoryNames();

const filterByCategory = (number) => {
  if (typeof number === "string") {
    const allProducts = JSON.parse(localStorage.getItem("products"));
    let productsByCategory = "";
    allProducts.map((product) => {
      productsByCategory += `
      <div class="col" id="test-col">
        <div class="card border-dark h-100" style="width: 18rem">
            <img
              src="${product.url_image}"
              class="card-img-top img-thumbnail"
              alt="${product.name}"
            />
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">$${product.price}</p>
            </div>
        </div>
      </div>
      `;
    });
    document.getElementById("all-products").innerHTML = productsByCategory;
  } else if (typeof number === "number") {
    fetch(`${url}/api/categories/${number}`)
      .then((response) => response.json())
      .then((data) => {
        let allProducts = "";
        data.map((product) => {
          allProducts += `
          <div class="col" id="test-col">
              <div class="card border-dark h-100" style="width: 18rem">
                  <img
                    src="${product.url_image}"
                    class="card-img-top img-thumbnail"
                    alt="${product.name}"
                  />
                  <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                  </div>
              </div>
            </div>
          `;
        });
        document.getElementById("all-products").innerHTML = allProducts;
      });
  }
};

// -------------------------- order products -------------------
const orders = (typeOrder) => {
  if (typeOrder === "orderAsc") {
    fetch(`${url}/api/products/order-asc`)
      .then((response) => response.json())
      .then((data) => {
        let orderProducts = "";
        data.map((product) => {
          orderProducts += `
          <div class="col" id="test-col">
              <div class="card border-dark h-100" style="width: 18rem">
                  <img
                    src="${product.url_image}"
                    class="card-img-top img-thumbnail"
                    alt="${product.name}"
                  />
                  <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                  </div>
              </div>
            </div>
          `;
        });
        document.getElementById("all-products").innerHTML = orderProducts;
      });
  } else if (typeOrder === "orderDesc") {
    fetch(`${url}/api/products/order-desc`)
      .then((response) => response.json())
      .then((data) => {
        let orderProducts = "";
        data.map((product) => {
          orderProducts += `
          <div class="col" id="test-col">
              <div class="card border-dark h-100" style="width: 18rem">
                  <img
                    src="${product.url_image}"
                    class="card-img-top img-thumbnail"
                    alt="${product.name}"
                  />
                  <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                  </div>
              </div>
            </div>
          `;
        });
        document.getElementById("all-products").innerHTML = orderProducts;
      });
  }
};
