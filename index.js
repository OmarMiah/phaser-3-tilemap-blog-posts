/**
 * Author: Michael Hadley, mikewesthad.com
 * Asset Credits:
 *  - Subtle Patterns
 */

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#222222",
  parent: "game-container",
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

function preload() {
  // "this" === Phaser.Scene
  this.load.image("../assets/tilesets/super-mario-tiles.png");
}

function create() {
  // You can access the game's config to read the width & height
  const level = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 2, 3, 0, 0, 0, 1, 2, 3, 0],
    [0, 5, 6, 7, 0, 0, 0, 5, 6, 7, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 14, 13, 14, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 14, 14, 14, 14, 14, 0, 0, 0, 15],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 15],
    [35, 36, 37, 0, 0, 0, 0, 0, 15, 15, 15],
    [39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39]
  ];

  // When loading from an array, make sure to specify the tileWidth and tileHeight
  const map = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16 });
  const tiles = map.addTilesetImage("mario-tiles");
  const layer = map.createStaticLayer(0, tiles, 0, 0);
}


function update(time, delta) {
  // We aren't using this in the current example, but here is where you can run logic that you need
  // to check over time, e.g. updating a player sprite's position based on keyboard input
}
