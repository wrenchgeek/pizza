describe('Pizza', function() {
  it("creates a new pizza", function() {
    var testPizza = new Pizza("Large");
    expect(testPizza.size).to.equal("Large");
    expect(testPizza.toppings).to.eql([]);
    expect(testPizza.price).to.equal(0);
  });

  it("calculates a pizza's price based on it's size", function() {
    var testPizza = new Pizza("Large");
    testPizza.calculatePrice();
    expect(testPizza.price).to.eql("15.00");
  });

  it("adds additional cost for each topping", function() {
    var testPizza = new Pizza("Large");
    testPizza.toppings.push("Pepperoni", "Sausage");
    testPizza.calculatePrice();
    expect(testPizza.price).to.eql("17.00");
  });

  it("makes a string that is a list of the toppings in plain english", function() {
    var testPizza = new Pizza("Large");
    testPizza.toppings.push("Pepperoni", "Mushroom", "Olive");
    expect(testPizza.toppingList()).to.equal("Pepperoni, Mushroom, and Olive")
  });
});
