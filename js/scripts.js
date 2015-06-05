function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = [];
  // debugger;
  this.price = 0;

  this.calculatePrice = function() {
    if (this.size === "Small") {
      this.price += 10;
    } else if (this.size === "Medium") {
      this.price += 12;
    } else if (this.size === "Large") {
      this.price += 15;
    } else {
      this.price += 17;
    }
    // toppings.forEach(function() {
    //   this.price += 1;
    // });
  }
}

(function(event) {
  event.precentDefault();


  $('form#pizza-order').submit(function(event) {
    event.preventDefault();
    var size = $(".size");

    var newPie = new Pizza(size, toppings);
    newPie.calculatePrice();
    debugger;
    $("#pizza-order-form").hide();
  });

});
