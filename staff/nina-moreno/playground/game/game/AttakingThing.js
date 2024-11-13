class AttackingThing extends MovableThing {
  constructor(container) {
    super(container);

    this.attacking = false;

    this.attackKey = " ";

    document.addEventListener("keydown", (event) => {
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
    });
  }

  setAttackKey(attackKey) {
    this.attackKey = attackKey;
  }

  setNormalImage(normalImage) {
    this.normalImage = normalImage;
  }

  setAttackingImage(attackingImage) {
    this.attackingImage = attackingImage;
  }
}
