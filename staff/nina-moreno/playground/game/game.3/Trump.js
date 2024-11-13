// var trump = new Trump

function Trump() {
  Thing.call(this, document.createElement("div"));

  this.setSize(70, 140);

  var trumpFaceImage = document.createElement("img");
  trumpFaceImage.src = "images/trump.png";
  trumpFaceImage.style.width = "50px";
  trumpFaceImage.style.position = "absolute";
  trumpFaceImage.style.zIndex = 1;
  trumpFaceImage.style.left = "20px";
  trumpFaceImage.style.top = "18px";
  this.container.appendChild(trumpFaceImage);

  var trumpFaceKissImage = document.createElement("img");
  trumpFaceKissImage.src = "images/trump-kiss.png";
  trumpFaceKissImage.style.width = "65px";
  trumpFaceKissImage.style.position = "absolute";
  trumpFaceKissImage.style.zIndex = 1;
  trumpFaceKissImage.style.left = "15px";
  trumpFaceKissImage.style.top = "14px";

  var trumpBodyImage = document.createElement("img");
  trumpBodyImage.src = "images/trump-body.png";
  trumpBodyImage.style.width = "100px";
  trumpBodyImage.style.position = "absolute";
  trumpBodyImage.style.left = "-10px";
  trumpBodyImage.style.top = "50px";
  this.container.appendChild(trumpBodyImage);

  var STEP = 10;

  document.addEventListener(
    "keydown",
    function (event) {
      if (event.key === "k") {
        this.container.removeChild(trumpFaceImage);
        this.container.appendChild(trumpFaceKissImage);
      } else if (event.key === "n") {
        this.container.removeChild(trumpFaceKissImage);
        this.container.appendChild(trumpFaceImage);
      } else if (event.key === "ArrowUp") this.moveY(-STEP);
      else if (event.key === "ArrowDown") this.moveY(STEP);
      else if (event.key === "ArrowLeft") {
        this.moveX(-STEP);
      } else if (event.key === "ArrowRight") this.moveX(STEP);
    }.bind(this)
  );
}

Trump.prototype = Object.create(Thing.prototype);
Trump.prototype.constructor = Trump;
