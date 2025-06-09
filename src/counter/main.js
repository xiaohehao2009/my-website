function App() {
  this.setup();
}

App.prototype.setup = function () {
  this.span   = document.querySelector("span");
  this.button = document.querySelector("button");
  this.count  = this.getCount();

  this.cleanURL();
  this.setCount();
  this.button.addEventListener("click", this.handleClick.bind(this));
};

App.prototype.getCount = function () {
  var string = localStorage.getItem("counter-count");
  var result = Number(string);
  var dict = this.parseURL();

  for (var i = 0; i < dict.length; i++) {
    var pair = dict[i];
    var key = pair[0].trim().toLowerCase();
    var value = Number(pair[1].trim().toLowerCase());

    if (!Number.isFinite(value)) {
      continue;
    }
    if (key === "set") {
      result = value;
      continue;
    }
    if (key === "add") {
      result += value;
      continue;
    }
    if (key === "sub") {
      result -= value;
      continue;
    }
    if (key === "mul") {
      result *= value;
      continue;
    }
    if (key === "div") {
      result /= value;
      continue;
    }
  }

  if (!Number.isFinite(result)) {
    result = 0;
  }
  return result;
};

App.prototype.parseURL = function () {
  var href = location.href;
  var index = href.indexOf("?");
  var dict = [];

  if (index !== -1) {
    var question = href.slice(index + 1);
    var array = question.split("&");

    for (var i = 0; i < array.length; i++) {
      var item = array[i];
      var pair = this.parseItem(item);

      if (pair !== null) {
        dict.push(pair);
      }
    }
  }

  return dict;
};

App.prototype.parseItem = function (item) {
  try {
    var string = decodeURIComponent(item);
  }
  catch (error) {
    return null;
  }

  var index = string.indexOf("=");
  if (index === -1) {
    return null;
  }

  var key = string.slice(0, index);
  var value = string.slice(index + 1);
  var pair = [key, value];
  return pair;
};

App.prototype.cleanURL = function () {
  var href = location.href;
  var index = href.indexOf("?");

  if (index !== -1) {
    var newHref = href.slice(0, index);
    location.replace(newHref);
  }
};

App.prototype.setCount = function () {
  localStorage.setItem("counter-count", this.count);
  this.span.textContent = this.count;
};

App.prototype.handleClick = function () {
  this.count++;
  this.setCount();
};

new App;
