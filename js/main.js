var config = {
  type: Phaser.AUTO,
  width: 1950,
  height: 950,
  //   width: 800,
  //   height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create
  }
};

var game = new Phaser.Game(config);

function preload() {
  // this.load.setBaseURL('http://labs.phaser.io');
  this.load.image("sky", "assets/images/bluesky.png");
  this.load.image("usulogo", "assets/images/usu.png");
  this.load.image("red", "assets/images/red.png");
}

function create() {
  this.add.image(400, 300, "sky");
  var particles = this.add.particles("red");
  var emitter = particles.createEmitter({
    lifespan: 900000,

    speed: 1,
    scale: { start: 0.2, end: 0.1 }
    // blendMode: "ADD"
  });

  var logo = this.physics.add.image(400, 100, "usulogo");
  logo.setVelocity(1000, 50);
  logo.setBounce(0.95, 0.95);
  logo.setCollideWorldBounds(true);
  emitter.startFollow(logo);
}
