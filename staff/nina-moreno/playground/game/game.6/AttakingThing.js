function AttackingThing(container) {
  MovableThing.call(this, container);

  this.attacking = false;

  this.attackKey = " ";

  document.addEventListener(
    "keydown",
    function (event) {
      console.log(event.key);
      if (event.key === this.attackKey)
        if (this.attacking) {
          this.container.removeChild(this.attackingImage);
          this.container.appendChild(this.normalImage);

          this.attacking = false;
        } else {
          this.container.removeChild(this.normalImage);
          this.container.appendChild(this.attackingImage);

          this.attacking = true;
        }
    }.bind(this)
  );
}

AttackingThing.prototype = Object.create(MovableThing.prototype);
AttackingThing.prototype.constructor = AttackingThing;

AttackingThing.prototype.setAttackKey = function (attackKey) {
  this.attackKey = attackKey;
};

AttackingThing.prototype.setNormalImage = function (normalImage) {
  this.normalImage = normalImage;
};

AttackingThing.prototype.setAttackingImage = function (attackingImage) {
  this.attackingImage = attackingImage;
};
