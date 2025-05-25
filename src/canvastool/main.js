function App() {
  this.background = "#fff";
  this.color      = "#000";
  this.fontSize   = 30;
  this.fontFamily = "'Clear Sans','Helvetica Neue',Arial,sans-serif";
  this.width      = 360;
  this.height     = 360;
  this.density    = 5 / 6;

  this.setup();
}

App.prototype.setup = function () {
  this.input0    = document.querySelectorAll("input")[0];
  this.checkbox0 = document.querySelectorAll("input")[1];
  this.input1    = document.querySelectorAll("input")[2];
  this.checkbox1 = document.querySelectorAll("input")[3];
  this.checkbox2 = document.querySelectorAll("input")[4];
  this.button    = document.querySelector("button");
  this.img       = document.querySelector("img");

  this.button.addEventListener("click", this.handleClick.bind(this));
};

App.prototype.handleClick = function () {
  var array = this.getArray();

  var canvas = document.createElement("canvas");
  var width = this.width;
  var height = this.height;
  canvas.width = width;
  canvas.height = height;

  var ctx = canvas.getContext("2d");
  ctx.fillStyle = this.background;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = this.color;
  ctx.font = this.fontSize + "px " + this.fontFamily;

  ctx.translate(width / 2, height / 2);
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  for (var i = 0; i < 4; i++) {
    if (array[i]) {
      ctx.save();

      var textWidth = ctx.measureText(array[i]).width;
      ctx.scale(width / (1.2 * textWidth), height / this.fontSize);
      ctx.fillText(array[i], 0, 0);

      ctx.restore();
    }

    ctx.rotate(Math.PI / 2);

    var temp = width;
    width = height;
    height = temp;
  }

  if (this.checkbox2.checked) {
    ctx.translate(-width / 2, -height / 2);
    ctx.fillStyle = "white";

    for (var i = 0; i < width; i++) {
      if (this.checkErase(i)) {
        ctx.fillRect(i, 0, 1, height);
      }
    }

    for (var i = 0; i < height; i++) {
      if (this.checkErase(i)) {
        ctx.fillRect(0, i, height, 1);
      }
    }
  }

  this.updateImg(canvas);
};

App.prototype.getArray = function () {
  var array = [];

  if (!this.checkbox0.checked) {
    array[0] = this.input0.value;
  }
  else {
    array[2] = this.input0.value;
  }

  if (!this.checkbox1.checked) {
    array[1] = this.input1.value;
  }
  else {
    array[3] = this.input1.value;
  }

  return array;
};

App.prototype.checkErase = function (number) {
  return Math.ceil(number * this.density) === Math.ceil((number + 1) * this.density);
};

App.prototype.updateImg = function (canvas) {
  this.img.src = canvas.toDataURL("image/jpeg");
  this.img.style.display = "block";
};

new App;
