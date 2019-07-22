function Balloon() {
  this.y = 50;
  this.x = width / 2;

  this.show = function() {
    fill("rgb(135,206,250)");
    noStroke();
    triangle(
      this.x - 10,
      this.y + 60,
      this.x,
      this.y + 38,
      this.x + 10,
      this.y + 60
    );
    ellipse(this.x, this.y, 84, 100);
  };

  this.up = function() {
    if (this.y >= 50) {
      this.y -= 10;
    }
  };
  this.down = function() {
    if (this.y <= height - 75) {
      this.y += 10;
    }
  };
  this.right = function() {
    if (this.x < width - 50) {
      this.x += 10;
    }
  };
  this.left = function() {
    if (this.x > 50 ) {
    this.x -= 10;
    }
  };
}
