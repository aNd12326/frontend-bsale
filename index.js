const getAllProducts = () => {
  fetch("http://localhost:3001/api/products")
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("products", JSON.stringify(data));
      data.map((product) => {
        document.getElementById("all-products").innerHTML += `
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
    });
};
getAllProducts();

// formulario
let form = document.querySelector("#searchByQuery");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.querySelector('input[name="name"]'));
  const formData = new FormData(form);
  console.log(formData.get("name"));
  const dataName = formData.get("name");

  fetch(`http://localhost:3001/api/products?name=${dataName}`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      let searchProducts = "";
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
    });
});

// filterByCategory;
const filterCategoryNames = () => {
  fetch("http://localhost:3001/api/categories")
    .then((response) => response.json())
    .then((data) => {
      let categoryNames = "";
      data.map((category) => {
        categoryNames += `
        <li class="nav-item p-1">
          <button class="btn btn-outline-dark" id=${category.id} onclick="filterByCategory(${category.id})">${category.name}</button>
        </li>
        `;
      });
      document.getElementById("categories").innerHTML = categoryNames;
    });
};
filterCategoryNames();

const filterByCategory = (number) => {
  if (typeof number === "string") {
    console.log(JSON.parse(localStorage.getItem("products")));
    const allProducts = JSON.parse(localStorage.getItem("products"));
    let newData = "";
    allProducts.map((product) => {
      newData += `
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
    document.getElementById("all-products").innerHTML = newData;
  } else if (typeof number === "number") {
    fetch(`http://localhost:3001/api/categories/${number}`)
      .then((response) => response.json())
      .then((data) => {
        let searchProducts = "";
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
      });
  }
};

// ------------------------  logic pagination ------------------

// const navPag = document.getElementById("numbers-pagination");
// const content = document.getElementById("all-products");

// let pageIndex = 0;
// let productsPerPage = 19;
// let products = JSON.parse(localStorage.getItem("products"));

// function loadProducts() {
//   content.innerHTML = "";

//   for (
//     let i = pageIndex * productsPerPage;
//     i < pageIndex * productsPerPage + productsPerPage;
//     i++
//   ) {
//     const product = document.createElement("div");
//     product.innerHTML = `
//       <div>
//         <img src="${products[i].url_image}" />
//       </div>
//     `;

//     content.append(product);
//   }

//   loadPageNav();
// }
// loadProducts();

// function loadPageNav() {
//   navPag.innerHTML = "";

//   for (let i = 0; i < products.length / productsPerPage; i++) {
//     const span = document.createElement("span");
//     span.innerHTML = i + 1;
//     span.addEventListener("click", (e) => {
//       pageIndex = e.target.innerHTML - 1;
//       loadProducts();
//     });

//     if (i === pageIndex) {
//       span.classList = "page-link";
//     }

//     navPag.append(span);
//   }
// }

// let allProducts = JSON.parse(localStorage.getItem("products"));
// let products = JSON.parse(localStorage.getItem("products")).length;

// const pageNumbers = [];
// for (let i = 1; i <= Math.ceil(products / productsPerPage); i++) {
//   pageNumbers.push(i);
// }

// pageNumbers.map((numbers) => {
//   document.getElementById("numbers-pagination").innerHTML += `
//     <li class="page-item"><button class="page-link">${numbers}</button></li>
//   `;
// });
