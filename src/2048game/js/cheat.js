function Cheat(game) {
  this.game = game;
  this.setup();
}

Cheat.prototype.setup = function () {
  var list = document.querySelectorAll(".cheat");
  list[0].addEventListener("click", this.handleClick0.bind(this));
  list[1].addEventListener("click", this.handleClick1.bind(this));
  list[2].addEventListener("click", this.handleClick2.bind(this));
  list[3].addEventListener("click", this.handleClick3.bind(this));
  list[4].addEventListener("click", this.handleClick4.bind(this));
  list[5].addEventListener("click", this.handleClick5.bind(this));
  list[6].addEventListener("click", this.handleClick6.bind(this));
  list[7].addEventListener("click", this.handleClick7.bind(this));
};

Cheat.prototype.handleClick0 = function () {
  var input = prompt("请输入你想要的开始方块数\n请输入1至16之间的数", "2");
  if (input === null) {
    return;
  }

  var value = Math.floor(input);
  if (value > 0 && value < 17) {
    this.game.startTiles = value;
  }
};

Cheat.prototype.handleClick1 = function () {
  if (confirm("确定要重置开始方块数吗")) {
    this.game.startTiles = 2;
  }
};

Cheat.prototype.handleClick2 = function () {
  var input = prompt("请输入你想要的随机方块数\n请输入1至16之间的数", "1");
  if (input === null) {
    return;
  }

  var value = Math.floor(input);
  if (value > 0 && value < 17) {
    this.game.randomTiles = value;
  }
};

Cheat.prototype.handleClick3 = function () {
  if (confirm("确定要重置随机方块数吗")) {
    this.game.randomTiles = 1;
  }
};

Cheat.prototype.handleClick4 = function () {
  var input = prompt("请输入你想要的随机方块值的JavaScript表达式", "Math.random()<0.9?2:4");
  if (input !== null) {
    this.game.randomTile = input;
  }
};

Cheat.prototype.handleClick5 = function () {
  if (confirm("确定要重置随机方块值吗")) {
    this.game.randomTile = "Math.random()<0.9?2:4";
  }
};

Cheat.prototype.handleClick6 = function () {
  var input = prompt("请输入你想要的分数", "0");
  if (input === null) {
    return;
  }

  var value = Math.floor(input);
  if (value >= 0) {
    this.game.score = value;
    this.game.actuate();
  }
};

Cheat.prototype.handleClick7 = function () {
  var input = prompt("请输入你想要的最高分", "0");
  if (input === null) {
    return;
  }

  var value = Math.floor(input);
  if (value >= 0) {
    this.game.storageManager.setBestScore(value);
    this.game.actuate();
  }
};
