(function(){


//Dummy data
var Beer = function (name, brewery, cost) {
  this.name = name;
  this.brewery = brewery;
  this.cost = cost;
};

var sculpin = new Beer('Sculpin', 'Balast Point Brewing', 4);
var outlaw = new Beer('Oulaw', 'Payette Brewing', 3);

var beers = [sculpin, outlaw];
console.log(beers);

//Menu template for displaying menu items
var menuTemplate = _.template($('#menu-template').text());
var $menu = $('#js-menu');

_.each(beers, function(beer){
  $menu.append(menuTemplate(beer));
});

//Cart template for displaying what's in the cart
var cartTemplate = _.template($('#cart-template').text());
var $cart = $('#js-cart');

//Attempting to console.log an individual beer when the "add to cart" button is pushed

var $beer = $('.beer');

$('.add-beer').click(function() {
  console.log(this);
});

}());
