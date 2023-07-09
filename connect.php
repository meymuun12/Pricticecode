
<?php
 $product = $_POST["product"];
 $qty = $_POST["qty"];
 $price = $_POST["price"];
 $total = $_POST["total"];
  $conn = mysqli_connect("localhost", "root", "", "mydatabase1");
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

 // SQL query to insert data into "products" table
$sql = "INSERT INTO products(name, qty, price, total)
VALUES ('$product', '$qty', '$price', '$total')";

if ($conn->query($sql) === TRUE) {
  echo "Data inserted successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>