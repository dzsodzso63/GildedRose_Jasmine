var checkItems = function(items, expected) {
    expected.map(function(item, index){
      expect(item[1]).toBe(items[index].quality);
      expect(item[0]).toBe(items[index].sellIn);
    });
};

describe("GildedRose shop manager", function () {
  it("does some stuff", function() {
     expect(1).toBe(1);
  });
  it("do the basics", function() {
    var items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Conjured Mana Cake", 3, 6)
    ];
    GildedRose.updateQuality(items);
    checkItems(items, [
      [9, 19],
      [1, 1],
      [4, 6],
      [0, 80],
      [14, 21]
    ]);
  });


});
