document.addEventListener("DOMContentLoaded", function() {
  
  const submitButton = document.getElementById("submit-button");
  const form = document.getElementById("reservation-form");

  submitButton.addEventListener("click", function() {
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const adults = document.getElementById("adult").value;
    const children = document.getElementById("child").value;
    const rooms = document.getElementById("rooms").value;
    
    if(checkin<=checkout){
      const totalBill = calculateTotalBill(adults, children, rooms);
      const confirmationPageURL = `reservation_confirmation.html?name=${name}&email=${email}&checkin=${checkin}&checkout=${checkout}&adults=${adults}&children=${children}&rooms=${rooms}&totalBill=${totalBill}`;
      window.location.href = confirmationPageURL;
    }else{
      alert("Please check checkin and checkout date");
    }
      
  });

  
  function calculateTotalBill(adults, children, rooms) {
   
    const adultPrice = 100; 
    const childPrice = 50; 
    const roomPrice = 200; 

    const totalBill = adults * adultPrice + children * childPrice + rooms * roomPrice;
    return totalBill;
  }
});
