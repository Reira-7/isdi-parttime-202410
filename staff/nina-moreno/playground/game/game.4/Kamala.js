function Kamala() {
  Thing.call(this, document.createElement("div"));

  this.setSize(70, 160);
  // this.container.style.backgroundColor = 'red'

  var kamalaFaceImage = document.createElement("img");
  kamalaFaceImage.src = "images/kamala.png";
  kamalaFaceImage.style.width = "50px";
  kamalaFaceImage.style.position = "absolute";
  kamalaFaceImage.style.zIndex = 1;
  kamalaFaceImage.style.left = "10px";
  kamalaFaceImage.style.top = "17px";
  this.container.appendChild(kamalaFaceImage);

  var kamalaFaceLaughImage = document.createElement("img");
  kamalaFaceLaughImage.src = "images/kamala-laugh.png";
  kamalaFaceLaughImage.style.width = "60px";
  kamalaFaceLaughImage.style.position = "absolute";
  kamalaFaceLaughImage.style.zIndex = 1;
  kamalaFaceLaughImage.style.left = "4px";
  kamalaFaceLaughImage.style.top = "10px";

  var kamalaBodyImage = document.createElement("img");
  kamalaBodyImage.src = "images/kamala-body.png";
  kamalaBodyImage.style.width = "100px";
  kamalaBodyImage.style.position = "absolute";
  kamalaBodyImage.style.left = "-10px";
  kamalaBodyImage.style.top = "20px";
  this.container.appendChild(kamalaBodyImage);

  var STEP = 10;

  this.upKey = "ArrowUp";
  this.downKey = "ArrowDown";
  this.leftKey = "ArrowLeft";
  this.rightKey = "ArrowRight";

  document.addEventListener(
    "keydown",
    function (event) {
      if (event.key === this.upKey) this.moveY(-STEP);
      else if (event.key === this.downKey) this.moveY(STEP);
      else if (event.key === this.leftKey) this.moveX(-STEP);
      else if (event.key === this.rightKey) this.moveX(STEP);
    }.bind(this)
  );

  this.attacking = false;

  document.addEventListener(
    "keydown",
    function (event) {
      if (event.key === "x") {
        if (this.attacking) {
          this.container.removeChild(kamalaFaceLaughImage);
          this.container.appendChild(kamalaFaceImage);

          this.attacking = false;
        } else {
          this.container.removeChild(kamalaFaceImage);
          this.container.appendChild(kamalaFaceLaughImage);

          this.attacking = true;
        }
      }
    }.bind(this)
  );
}

Kamala.prototype = Object.create(Thing.prototype);
Kamala.prototype.constructor = Kamala;

Kamala.prototype.setKeys = function (upKey, downKey, leftKey, rightKey) {
  this.upKey = upKey;
  this.downKey = downKey;
  this.leftKey = leftKey;
  this.rightKey = rightKey;
};
