var ItemOriginal = function (name, sellIn, quality) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
};


var Item = function (name, sellIn, quality) {

  ItemOriginal.call(this, name, sellIn, quality);
};

Item.prototype = Object.create( ItemOriginal.prototype );//why do we need Obj. create

