var productCount = 0;

function addProduct() {
  productCount++;
  var form = document.getElementById("product-form");
  var productDiv = document.createElement("div");
  productDiv.className = "product-row";
  productDiv.innerHTML = `

    <input type="text" name="product${productCount}" placeholder="Product name" required>
    <input type="number" name="qty${productCount}" placeholder="Quantity" required oninput="calculateTotal(this)">
    <input type="number" name="price${productCount}" placeholder="Price" required oninput="calculateTotal(this)">
    <input type="number" name="total${productCount}" placeholder="Total" readonly>
    <button type="button" class="remove-product" onclick="removeProduct(this)">Remove</button>
  `;
  form.appendChild(productDiv);
}

function removeProduct(button) {
  button.parentNode.remove();
  productCount--;
  var productNumbers = document.getElementsByClassName("product-number");
  for (var i = 0; i < productNumbers.length; i++) {
    productNumbers[i].textContent = i + 1;
  }
}
function deleteAll() {
    var productRows = document.getElementsByClassName("product-row");
    while (productRows.length > 0) {
      productRows[0].remove();
    }
    productCount = 0;
  }
  function SubmitAll() {
    var productRows = document.getElementsByClassName("product-row");
    while (productRows.length > 0) {
      productRows[0].Submit();
    }
    productCount = 0;
  }

function calculateTotal(input) {
  var productRow = input.parentNode;
  var qty = productRow.querySelector("[name^='qty']").value;
  var price = productRow.querySelector("[name^='price']").value;
  var total = qty * price;
  productRow.querySelector("[name^='total']").value = total;
}

   // Send form data to PHP script using POST request
   $.post("connect.php", { product, qty, price, total }, function(data) {
    alert(data);
  });