function App() {
  this.failCards  = "四张牌的数字格式有误";
  this.failTarget = "目标数字（计算结果）格式有误";
  this.epsilon    = 1E-7;

  this.setup();
}

App.prototype.setup = function () {
  this.cards  = document.querySelectorAll("input")[0];
  this.target = document.querySelectorAll("input")[1];
  this.button = document.querySelector("button");
  this.result = document.querySelector(".result");

  this.button.addEventListener("click", this.handleClick.bind(this));
};

App.prototype.handleClick = function () {
  var cards = this.parseCards();
  if (cards === null) {
    this.setResult(this.failCards);
    return;
  }
  cards.sort(function (x, y) {
    return y - x;
  });

  var target = this.parseTarget();
  if (target === null) {
    this.setResult(this.failTarget);
    return;
  }

  var startTime = Date.now();
  var items = this.calculate(cards, target);
  var endTime = Date.now();
  var string = this.formatItems(items, endTime - startTime);
  this.setResult(string);
};

App.prototype.parseCards = function () {
  var input = this.cards.value.trim().toLowerCase();

  var array;
  if (input.length === 4) {
    array = input.split("");
  }
  else {
    array = input.split(/\s+/);
  }

  if (array.length !== 4) {
    return null;
  }

  var cards = [];
  for (var i = 0; i < array.length; i++) {
    var item = this.parseNumber(array[i]);
    if (item === null) {
      return null;
    }
    cards.push(item);
  }

  return cards;
};

App.prototype.parseNumber = function (string) {
  if (string === "a") {
    return 1;
  }
  if (string === "j") {
    return 11;
  }
  if (string === "q") {
    return 12;
  }
  if (string === "k") {
    return 13;
  }
  if (isNaN(string)) {
    return null;
  }
  return Number(string);
};

App.prototype.setResult = function (string) {
  this.result.textContent = string;
};

App.prototype.parseTarget = function () {
  var input = this.target.value.trim().toLowerCase();
  var target = this.parseNumber(input);
  return target;
};

App.prototype.calculate = function (cards, target) {
  var matrix = this.getMatrix(cards);
  var items = [];

  for (var i = 0; i < matrix.length; i++) {
    var array = matrix[i];

    for (var pattern = 0; pattern < 5; pattern++) {
      for (var operators = 0; operators < 64; operators++) {
        var result = this.getResult(array, pattern, operators);

        if (Math.abs(result - target) < this.epsilon) {
          items.push(this.getItem(array, pattern, operators, target));
        }
      }
    }
  }

  return items;
};

App.prototype.getMatrix = function (array) {
  if (array.length === 1) return [array];

  var matrix = [];
  loop:
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < i; j++) {
      if (array[i] === array[j]) {
        continue loop;
      }
    }

    var slice = array.slice();
    slice.splice(i, 1);

    var subMatrix = this.getMatrix(slice);
    for (var j = 0; j < subMatrix.length; j++) {
      var item = subMatrix[j];
      item.push(array[i]);
      matrix.push(item);
    }
  }

  return matrix;
};

App.prototype.getResult = function (array, pattern, operators) {
  var operator1 = operators >> 4;
  var operator2 = operators >> 2 & 3;
  var operator3 = operators & 3;

  if (pattern === 0) {
    // ( ( 1 + 2 ) - 3 ) × 4
    return this.operate(operator3, this.operate(operator2, this.operate(operator1, array[0], array[1]), array[2]), array[3]);
  }
  if (pattern === 1) {
    // ( 1 + ( 2 - 3 ) ) × 4
    return this.operate(operator3, this.operate(operator1, array[0], this.operate(operator2, array[1], array[2])), array[3]);
  }
  if (pattern === 2) {
    // ( 1 + 2 ) - ( 3 × 4 )
    return this.operate(operator2, this.operate(operator1, array[0], array[1]), this.operate(operator3, array[2], array[3]));
  }
  if (pattern === 3) {
    // 1 + ( ( 2 - 3 ) × 4 )
    return this.operate(operator1, array[0], this.operate(operator3, this.operate(operator2, array[1], array[2]), array[3]));
  }
  // 1 + ( 2 - ( 3 × 4 ) )
  return this.operate(operator1, array[0], this.operate(operator2, array[1], this.operate(operator3, array[2], array[3])));
};

App.prototype.operate = function (operator, x, y) {
  if (operator === 0) {
    return x + y;
  }
  if (operator === 1) {
    return x - y;
  }
  if (operator === 2) {
    return x * y;
  }
  if (operator === 3) {
    return x / y;
  }
};

App.prototype.getItem = function (array, pattern, operators, target) {
  var operator1 = operators >> 4;
  var operator2 = operators >> 2 & 3;
  var operator3 = operators & 3;

  if (pattern === 0) {
    // ( ( 1 + 2 ) - 3 ) × 4
    return "((" + array[0] + this.getOperator(operator1) + array[1] + ")" + this.getOperator(operator2) + array[2] + ")" + this.getOperator(operator3) + array[3] + "=" + target;
  }
  if (pattern === 1) {
    // ( 1 + ( 2 - 3 ) ) × 4
    return "(" + array[0] + this.getOperator(operator1) + "(" + array[1] + this.getOperator(operator2) + array[2] + "))" + this.getOperator(operator3) + array[3] + "=" + target;
  }
  if (pattern === 2) {
    // ( 1 + 2 ) - ( 3 × 4 )
    return "(" + array[0] + this.getOperator(operator1) + array[1] + ")" + this.getOperator(operator2) + "(" + array[2] + this.getOperator(operator3) + array[3] + ")=" + target;
  }
  if (pattern === 3) {
    // 1 + ( ( 2 - 3 ) × 4 )
    return array[0] + this.getOperator(operator1) + "((" + array[1] + this.getOperator(operator2) + array[2] + ")" + this.getOperator(operator3) + array[3] + ")=" + target;
  }
  // 1 + ( 2 - ( 3 × 4 ) )
  return array[0] + this.getOperator(operator1) + "(" + array[1] + this.getOperator(operator2) + "(" + array[2] + this.getOperator(operator3) + array[3] + "))=" + target;
};

App.prototype.getOperator = function (operator) {
  var operators = ["+", "-", "\xd7", "\xf7"];
  return operators[operator];
};

App.prototype.formatItems = function (items, period) {
  if (items.length === 0) {
    return "用时" + period + "毫秒，无结果";
  }
  var prefix = "用时" + period + "毫秒，" + items.length + "个结果\n";
  var postfix = items.join("\n");
  return prefix + postfix;
};

new App;
