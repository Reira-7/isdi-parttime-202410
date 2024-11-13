class MovableThing extends Thing {
  constructor(container) {
    super(container);

    const STEP = 10;

    this.upKey = "ArrowUp";
    this.downKey = "ArrowDown";
    this.leftKey = "ArrowLeft";
    this.rightKey = "ArrowRight";

    document.addEventListener("keydown", (event) => {
      if (event.key === this.upKey) this.moveY(-STEP);
      else if (event.key === this.downKey) this.moveY(STEP);
      else if (event.key === this.leftKey) this.moveX(-STEP);
      else if (event.key === this.rightKey) this.moveX(STEP);
    });
  }

  setMovingKeys(upKey, downKey, leftKey, rightKey) {
    this.upKey = upKey;
    this.downKey = downKey;
    this.leftKey = leftKey;
    this.rightKey = rightKey;
  }

  move(dx, dy) {
    this.setXY(this.x + dx, this.y + dy);
  }

  moveX(dx) {
    this.move(dx, 0);
  }

  moveY(dy) {
    this.move(0, dy);
  }
}
