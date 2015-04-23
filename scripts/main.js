(function(){

var Beer = function (name, brewery, cost) {
  this.name = name;
  this.brewery = brewery;
  this.cost = cost;
};

var sculpin = new Beer('Sculpin', 'Balast Point Brewing', 4);
var outlaw = new Beer('Oulaw', 'Payette Brewing', 3);

var beers = [sculpin, outlaw];

console.log(beers);

var menuTemplate = _.template($('#menu-template').text());
var $menu = $('#js-menu');

_.each(beers, function(beer){
  $menu.append(menuTemplate(beer));
});
}());
