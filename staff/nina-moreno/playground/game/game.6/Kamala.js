function Kamala() {
  AttackingThing.call(this, document.createElement("div"));

  this.setSize(70, 160);

  var kamalaFaceImage = document.createElement("img");
  kamalaFaceImage.src = "images/kamala.png";
  kamalaFaceImage.style.width = "50px";
  kamalaFaceImage.style.position = "absolute";
  kamalaFaceImage.style.zIndex = 1;
  kamalaFaceImage.style.left = "10px";
  kamalaFaceImage.style.top = "17px";
  this.setNormalImage(kamalaFaceImage);
  this.container.appendChild(kamalaFaceImage);

  var kamalaFaceLaughImage = document.createElement("img");
  kamalaFaceLaughImage.src = "images/kamala-laugh.png";
  kamalaFaceLaughImage.style.width = "60px";
  kamalaFaceLaughImage.style.position = "absolute";
  kamalaFaceLaughImage.style.zIndex = 1;
  kamalaFaceLaughImage.style.left = "4px";
  kamalaFaceLaughImage.style.top = "10px";
  this.setAttackingImage(kamalaFaceLaughImage);

  var kamalaBodyImage = document.createElement("img");
  kamalaBodyImage.src = "images/kamala-body.png";
  kamalaBodyImage.style.width = "100px";
  kamalaBodyImage.style.position = "absolute";
  kamalaBodyImage.style.left = "-10px";
  kamalaBodyImage.style.top = "20px";
  this.container.appendChild(kamalaBodyImage);
}

Kamala.prototype = Object.create(AttackingThing.prototype);
Kamala.prototype.constructor = Kamala;
