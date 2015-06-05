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
  }

  this.addToppings = function() {
    var pizzaToppings = [];
    $("#pizza-toppings input:checkbox:checked").each(function() {
      pizzaToppings.push($(this).val());
    });
    this.toppings = pizzaToppings;
  }
}

$(function() {

  $('form#pizza-order').submit(function(event) {
    event.preventDefault();
    var size = $(".size").val();
    newPie = new Pizza(size);
    newPie.calculatePrice();
    newPie.addToppings();
    $("#pizza-order-form").hide();
    $("#pizza-output").append('<p>' + newPie.size + ' ' + newPie.toppings + ' ' + newPie.price + '</p>')
  });
});
