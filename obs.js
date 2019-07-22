function Obs() {
  this.spacing = 300;
  this.top = random(height / 6, 3 / 4 * height);
  this.bottom = height - (this.top + this.spacing);
  this.x = width;
  this.widthOfRect = 80;
  this.speed = 5;
  this.bg = loadImage('./assets/grass.jpg');
  this.highlight = false;

  this.hits = function(balloon) {
    if (balloon.y < this.top || balloon.y > height - this.bottom) {
      if (balloon.x > this.x && balloon.x < this.x + this.widthOfRect) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
    fill('rgb(87,59,12)');
    if (this.highlight) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.widthOfRect, this.top);
    
    rect(this.x, height-this.bottom, this.widthOfRect, this.bottom);

  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.widthOfRect) {
      return true;
    } else {
      return false;
    }
  }


}