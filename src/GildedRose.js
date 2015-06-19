var GildedRose = function () {
  var items = [];
  items.push(new Item("+5 Dexterity Vest", 10, 20));
  items.push(new Item("Aged Brie", 2, 0));
  items.push(new Item("Elixir of the Mongoose", 5, 7));
  items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
  items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
  items.push(new Item("Conjured Mana Cake", 3, 6));
  GildedRose.updateQuality(items);
};
var constants = {
    qualityDecay : 1,
    maxQuality : 50
};

GildedRose.updateQuality = function (items) {
  items.forEach(function (currentItem, i) {

    if ("Aged Brie" == currentItem.name ) {
      if (currentItem.quality < constants.maxQuality) {
        currentItem.quality++;
      }
      currentItem.sellIn -= constants.qualityDecay;
      if (currentItem.sellIn < 0) {
        addQualityIfBelowMaxQuality(currentItem);
      }
    }
    else if ("Backstage passes to a TAFKAL80ETC concert" == currentItem.name){
      if (currentItem.quality < constants.maxQuality) {
        currentItem.quality++;
        if (currentItem.sellIn < 11) {
          addQualityIfBelowMaxQuality(currentItem);
        }
        if (currentItem.sellIn < 6) {
          addQualityIfBelowMaxQuality(currentItem);
        }
      }
      currentItem.sellIn -= constants.qualityDecay;
      if (currentItem.sellIn < 0) {
        currentItem.quality = 0;
      }
    }
    else if ("Sulfuras, Hand of Ragnaros" == currentItem.name){
    }
    else {
      if (currentItem.quality > 0) {
        currentItem.quality -= constants.qualityDecay;
      }
      currentItem.sellIn -= constants.qualityDecay;

      if (currentItem.sellIn < 0) {
        currentItem.quality -= constants.qualityDecay;
      }
    }
  });
  return items;
}

var addQualityIfBelowMaxQuality = function (item) {
  if (item.quality < constants.maxQuality) {
    item.quality += 1;
  }
};
