// fetch("http://localhost:3001/api/products")
//   .then((resp) => resp.json())
//   .then((data) => {
//     console.log(data);
//     const html = data
//       .map((product) => {
//         return `
//         <div class="col" id="test-col">
//           <div class="card border-dark h-100" style="width: 18rem">
//               <img
//                 src="${product.url_image}"
//                 class="card-img-top img-thumbnail"
//                 alt="${product.name}"
//               />
//               <div class="card-body">
//                 <h5 class="card-title">${product.name}</h5>
//                 <p class="card-text">$${product.price}</p>
//               </div>
//           </div>
//         </div>
//         `;
//       })
//       .join("");
//     document
//       .querySelector("#all-products")
//       .insertAdjacentHTML("afterend", html);
//   });

fetch("http://localhost:3001/api/products")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
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

// formulario
let form = document.querySelector("#searchByQuery");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.querySelector('input[name="name"]'));
  const formData = new FormData(form);
  console.log(formData.get("name"));
  const dataName = formData.get("name");

  // fetch(`http://localhost:3001/api/products?name=${dataName}`)
  //   .then((resp) => resp.json())
  //   .then((data) => {
  //     console.log(data);
  //     const html = data
  //       .map((product) => {
  //         return `
  //       <div class="col">
  //         <div class="card border-dark h-100" style="width: 18rem">
  //             <img
  //               src="${product.url_image}"
  //               class="card-img-top img-thumbnail"
  //               alt="${product.name}"
  //             />
  //             <div class="card-body">
  //               <h5 class="card-title">${product.name}</h5>
  //               <p class="card-text">$${product.price}</p>
  //             </div>
  //         </div>
  //       </div>
  //       `;
  //       })
  //       .join("");
  //     document
  //       .querySelector("#all-products")
  //       .insertAdjacentHTML("afterend", html);
  //   });
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
