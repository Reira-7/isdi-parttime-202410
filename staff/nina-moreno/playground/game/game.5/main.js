var root = new Thing(document.body.querySelector("#root"));

var trump = new Trump();
trump.setMovingKeys("i", "k", "j", "l");
trump.setAttackKey("z");
root.add(trump);
trump.setXY(300, 0);

var trump2 = new Trump();
trump2.setMovingKeys("ñ", ".", ",", "-");
root.add(trump2);
trump2.setXY(300, 150);

var trump3 = new Trump();
root.add(trump3);
trump3.setXY(300, 300);

var kamala = new Kamala();
kamala.setMovingKeys("w", "s", "a", "d");
kamala.setAttackKey("x");
root.add(kamala);

var kamala2 = new Kamala();
kamala2.setMovingKeys("t", "g", "f", "h");
root.add(kamala2);
kamala2.setXY(0, 150);

var kamala3 = new Kamala();
root.add(kamala3);
kamala3.setXY(0, 300);
