function MyPizza(size, toppings, crust) {
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
}

$(document).ready(function(){
  $("#pizzaBtn").click(function(e){
    e.preventDefault()
    var size = document.getElementById("size").value
    var crust = $("#crust").val()
    var toppings = []
      $("input:checkbox[name=topping]:checked").each(function(){
      toppings.push($(this).val())
    });
    var pizza = new MyPizza(size, toppings, crust)
    console.log(pizza);
  });
});
