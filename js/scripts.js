function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = [];
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

    this.price += this.toppings.length;
    this.price = this.price.toFixed(2);
  }

// NOTE: I'm not entirely sure how to right a spec for the following
//       function as the jQuery selector would make no sense to the
//       spec-runner.  Would it be more propper to take the input in
//       the "document ready" section and leave the purely js
//       functions absent of jQuery selectors?

  this.addToppings = function() {
    var pizzaToppings = [];
    $("#pizza-toppings input:checkbox:checked").each(function() {
      pizzaToppings.push($(this).val());
    });
    this.toppings = pizzaToppings;
  }

  this.toppingList = function() {
    var toppingString = "";
    for (var index = 0; index < this.toppings.length - 1; index++) {
      var topping = this.toppings[index];
      toppingString += (topping + ", ");
    }
    toppingString += ("and " + this.toppings[this.toppings.length - 1]);
    return toppingString;
  }
}

$(function() {

  $('form#pizza-order').submit(function(event) {
    event.preventDefault();
    var size = $(".size").val();
    newPie = new Pizza(size);
    newPie.addToppings();
    newPie.calculatePrice();
    $("#pizza-order-form").hide();
    $("#pizza-output").append("<h2>Thank you!</h2>" +
                              "<p>Your " + newPie.size + ' ' + newPie.toppingList() + " pie is on it's way.</p>" +
                              "<p>The charge will be $" + newPie.price + '</p>')
  });
});
