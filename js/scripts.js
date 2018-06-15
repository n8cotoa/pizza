function MyPizza() {
  this.toppings = []
  this.size = ""
  this.crust = ""
}

$(document).ready(function(){
  var pizza = new MyPizza (size, toppings, crust)
});
