var root = document.body.querySelector("#root");

var trump = new Thing(document.createElement("div"));
trump.setSize(70, 140);
// trump.style.backgroundColor = 'red'

root.appendChild(trump.container);

var trumpFaceImage = document.createElement("img");
trumpFaceImage.src = "images/trump.png";
trumpFaceImage.style.width = "50px";
trumpFaceImage.style.position = "absolute";
trumpFaceImage.style.zIndex = 1;
trumpFaceImage.style.left = "20px";
trumpFaceImage.style.top = "18px";
trump.container.appendChild(trumpFaceImage);

var trumpFaceKissImage = document.createElement("img");
trumpFaceKissImage.src = "images/trump-kiss.png";
trumpFaceKissImage.style.width = "65px";
trumpFaceKissImage.style.position = "absolute";
trumpFaceKissImage.style.zIndex = 1;
trumpFaceKissImage.style.left = "15px";
trumpFaceKissImage.style.top = "14px";
// trump.appendChild(trumpFaceKissImage)

var trumpBodyImage = document.createElement("img");
trumpBodyImage.src = "images/trump-body.png";
trumpBodyImage.style.width = "100px";
trumpBodyImage.style.position = "absolute";
trumpBodyImage.style.left = "-10px";
trumpBodyImage.style.top = "50px";
trump.container.appendChild(trumpBodyImage);

trump.setXY(300, 0);

var STEP = 10;

document.addEventListener("keydown", function (event) {
  if (event.key === "k") {
    trump.container.removeChild(trumpFaceImage);
    trump.container.appendChild(trumpFaceKissImage);
  } else if (event.key === "n") {
    trump.container.removeChild(trumpFaceKissImage);
    trump.container.appendChild(trumpFaceImage);
  } else if (event.key === "ArrowUp") trump.moveY(-STEP);
  else if (event.key === "ArrowDown") trump.moveY(STEP);
  else if (event.key === "ArrowLeft") {
    trump.moveX(-STEP);
  } else if (event.key === "ArrowRight") trump.moveX(STEP);
});

var kamala = new Thing(document.createElement("div"));
kamala.setSize(70, 140);
// kamala.style.backgroundColor = 'red'
root.appendChild(kamala.container);

var kamalaFaceImage = document.createElement("img");
kamalaFaceImage.src = "images/kamala.png";
kamalaFaceImage.style.width = "50px";
kamalaFaceImage.style.position = "absolute";
kamalaFaceImage.style.zIndex = 1;
kamalaFaceImage.style.left = "10px";
kamalaFaceImage.style.top = "17px";
kamala.container.appendChild(kamalaFaceImage);

var kamalaFaceLaughImage = document.createElement("img");
kamalaFaceLaughImage.src = "images/kamala-laugh.png";
kamalaFaceLaughImage.style.width = "60px";
kamalaFaceLaughImage.style.position = "absolute";
kamalaFaceLaughImage.style.zIndex = 1;
kamalaFaceLaughImage.style.left = "4px";
kamalaFaceLaughImage.style.top = "10px";
// kamala.appendChild(kamalaFaceLaughImage)

var kamalaBodyImage = document.createElement("img");
kamalaBodyImage.src = "images/kamala-body.png";
kamalaBodyImage.style.width = "100px";
kamalaBodyImage.style.position = "absolute";
kamalaBodyImage.style.left = "-10px";
kamalaBodyImage.style.top = "20px";
kamala.container.appendChild(kamalaBodyImage);

var STEP = 10;

document.addEventListener("keydown", function (event) {
  if (event.key === "l") {
    kamala.container.removeChild(kamalaFaceImage);
    kamala.container.appendChild(kamalaFaceLaughImage);
  } else if (event.key === "m") {
    kamala.container.removeChild(kamalaFaceLaughImage);
    kamala.container.appendChild(kamalaFaceImage);
  } else if (event.key === "w") kamala.moveY(-STEP);
  else if (event.key === "s") kamala.moveY(STEP);
  else if (event.key === "a") kamala.moveX(-STEP);
  else if (event.key === "d") kamala.moveX(STEP);
});
