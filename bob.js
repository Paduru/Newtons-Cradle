class Bob {
  constructor(x, y) {
    var option = {
      restitution: 0.8,
      density: 1.0,
      friction: 0.5,
    };
    this.body = Bodies.circle(x, y, 25, option);
    World.add(world, this.body);
  }
  display() {
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, 25, 25);
  }
}
