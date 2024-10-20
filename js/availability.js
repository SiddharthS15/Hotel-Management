document.getElementById("availability-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting

  // Get input values
  const checkInDate = new Date(document.getElementsByName("check_in")[0].value);
  const checkOutDate = new Date(document.getElementsByName("check_out")[0].value);
  const numAdults = parseInt(document.getElementsByName("adults")[0].value);
  const numChildren = parseInt(document.getElementsByName("children")[0].value);

  // Calculate the difference in days
  const timeDifference = checkOutDate - checkInDate;
  const daysDifference = timeDifference / (1000 * 3600 * 24);

  // Check availability conditions
  if (daysDifference < 5 && numAdults < 7 && numChildren < 7 && (numAdults + numChildren) < 7 && timeDifference>0) {
      document.getElementById("availability-message").innerHTML = "Room is available!";
  } 
  else {
      document.getElementById("availability-message").innerHTML = "Room is not available.";
  }
});
