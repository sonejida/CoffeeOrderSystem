document.getElementById("order-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get user input values
  var coffeeCount = document.getElementById("coffee").value;
  var size = document.getElementById("size").value;
  var creams = document.getElementById("creams").value;
  var sugars = document.getElementById("sugars").value;

  // Pass the values to the order summary page
  localStorage.setItem("coffeeCount", coffeeCount);
  localStorage.setItem("size", size);
  localStorage.setItem("creams", creams);
  localStorage.setItem("sugars", sugars);

  // Redirect to the order summary page
  window.location.href = "order_summary.html";
});
