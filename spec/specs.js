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
    expect(testPizza.price).to.equal(15);
  });

  it("adds additional cost for each topping", function() {
    var testPizza = new Pizza("Large");
    testPizza.toppings.push("Pepperoni");
    testPizza.calculatePrice();
    expect(testPizza.price).to.equal(16);
  })
});
