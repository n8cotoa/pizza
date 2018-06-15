var pizza = ""
var deliveryAddress = ""

function MyPizza(name, size, toppings, crust) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
  this.address = []
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + " " + this.state
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
  return 7 + sizeCost(this.size) + crustCost(this.crust) + toppingsCost(this.toppings)
}

function validateAddressReceipt() {
  var status=false
  $(".new-address input").each(function(){
    if ($(this).val() !== "") {
    $("#deliveryTitle").text("Deliver to:")
    status = true
    }
  })
  if (status === true) {
    $("#receiptAddress").text(deliveryAddress.fullAddress())
  }
}

function inputHasValues() {
  if ($("#name").val() && $("input:radio[name=size]:checked").val() && $("#crust").val() && $("input:checkbox[name=topping]:checked").val()) {
    return true
  } else {
    return false
  }
}

function disableOrderBtn() {
  $("#pizzaBtn").prop('disabled', 'true')
}

function enableOrderBtn() {
  $("#pizzaBtn").removeAttr('disabled')
}

$(document).ready(function(){
  disableOrderBtn()
  $("#name, input:radio[name=size], #crust, input:checkbox[name=topping]").click(function(){
  inputHasValues() ? enableOrderBtn() : disableOrderBtn();
  })
  $("#add-delivery").click(function() {
    $("#delivery-address").slideDown()
  });

  $("#pizzaBtn").click(function(e){
    e.preventDefault()
    var name = $("#name").val()
    var size = $("input:radio[name=size]:checked").val()
    var crust = $("#crust").val()
    var toppings = []
      $("input:checkbox[name=topping]:checked").each(function(){
      toppings.push($(this).val())
      });
    pizza = new MyPizza(name, size, toppings, crust)

    $(".new-address").each(function() {
     var inputtedStreet = $(this).find("input.new-street").val();
     var inputtedCity = $(this).find("input.new-city").val();
     var inputtedState = $(this).find("input.new-state").val();
     deliveryAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
     pizza.address.push(deliveryAddress);
   });

    $("#receiptName").text(pizza.name)
    $("#receiptSize").text(pizza.size)
    $("#receiptCrust").text(pizza.crust)
    $("#receiptToppings").text(pizza.toppings.join(", "))
    $("#receiptTotal").text(" $" + pizza.calcCost())
    validateAddressReceipt()
  });

  $("#reset").click(function(e){
    e.preventDefault()
    $("#name").val("")
    $("input:radio[name=size]").prop('checked', false)
    $("#crust").prop("selectedIndex", 0)
    $("input:checkbox[name=topping]:checked").prop('checked', false)
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
    $("#delivery-address").slideUp()
  });
});
