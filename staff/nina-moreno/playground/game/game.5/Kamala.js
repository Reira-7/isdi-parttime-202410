function Kamala() {
  MovableThing.call(this, document.createElement("div"));

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

  this.attacking = false;

  this.attackKey = " ";

  document.addEventListener(
    "keydown",
    function (event) {
      console.log(event.key);
      if (event.key === this.attackKey)
        if (this.attacking) {
          this.container.removeChild(kamalaFaceLaughImage);
          this.container.appendChild(kamalaFaceImage);

          this.attacking = false;
        } else {
          this.container.removeChild(kamalaFaceImage);
          this.container.appendChild(kamalaFaceLaughImage);

          this.attacking = true;
        }
    }.bind(this)
  );
}

Kamala.prototype = Object.create(MovableThing.prototype);
Kamala.prototype.constructor = Kamala;

Kamala.prototype.setAttackKey = function (attackKey) {
  this.attackKey = attackKey;
};
