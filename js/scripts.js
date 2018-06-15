function MyPizza(name, size, toppings, crust) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
}

function sizeCost(input) {
  var price = 0
  switch(input) {
    case "small":
      price = 1;
      break;
    case "medium":
      price = 2;
      break;
    case "large":
      price = 3;
      break;
  }
  return price
}

function crustCost(input) {
  var price = 0
  switch(input) {
    case "Regular Crust":
      price =1;
      break;
    case "Thin Crust":
      price = 2
      break;
    case "Deep Dish":
      price = 3
      break;
    case "Stuffed Crust":
      price = 4
      break;
  }
  return price
}

function toppingsCost(input) {
  var price = 0
  console.log(input.length);
  if (input.length === 1) {
    price = 1
  } else if (input.length === 2) {
    price = 2
  } else if (input.length = 3) {
    price = 3
  } else if (input.length > 4) {
    price = 4
  }
  return price
}

MyPizza.prototype.calcCost = function() {
  return 5 + sizeCost(this.size) + crustCost(this.crust) + toppingsCost(this.toppings)
}

$(document).ready(function(){
  $("#pizzaBtn").click(function(e){
    e.preventDefault()
    var name = $("#name").val()
    var size = $("input:radio[name=size]:checked").val()
    var crust = $("#crust").val()
    var toppings = []
      $("input:checkbox[name=topping]:checked").each(function(){
      toppings.push($(this).val())
    });
    var pizza = new MyPizza(name, size, toppings, crust)
    pizza.calcCost()
  });
});
