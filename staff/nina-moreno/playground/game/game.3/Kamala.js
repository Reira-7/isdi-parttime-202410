function Kamala() {
  Thing.call(this, document.createElement("div"));

  this.setSize(70, 140);

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

  document.addEventListener(
    "keydown",
    function (event) {
      if (event.key === "l") {
        this.container.removeChild(kamalaFaceImage);
        this.container.appendChild(kamalaFaceLaughImage);
      } else if (event.key === "m") {
        this.container.removeChild(kamalaFaceLaughImage);
        this.container.appendChild(kamalaFaceImage);
      } else if (event.key === "w") this.moveY(-STEP);
      else if (event.key === "s") this.moveY(STEP);
      else if (event.key === "a") this.moveX(-STEP);
      else if (event.key === "d") this.moveX(STEP);
    }.bind(this)
  );
}

Kamala.prototype = Object.create(Thing.prototype);
Kamala.prototype.constructor = Kamala;
