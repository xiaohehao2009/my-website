(el => {
  const elCount = el("count");
  const elButton = el("button");
  let count = +localStorage.getItem("count");
  const href = location.href;
  if (href.includes("?")) {
    for (let str of href.slice(href.indexOf("?") + 1).split("&")) {
      try {
        str = decodeURIComponent(str);
      }
      catch (_) {
        continue;
      }
      if (!str.includes("=")) {
        continue;
      }
      const key = str.slice(0, str.indexOf("=")).trim().toLowerCase();
      const value = +str.slice(str.indexOf("=") + 1).trim();
      if (!Number.isFinite(value)) {
        continue;
      }
      if (key === 'add') {
        count += value;
        break;
      }
      if (key === 'sub') {
        count -= value;
        break;
      }
      if (key === 'mul') {
        count *= value;
        break;
      }
      if (key === 'div') {
        count /= value;
        break;
      }
      if (key === 'set') {
        count = value;
        break;
      }
    }
    location.replace(href.slice(0, href.indexOf("?")))
  }
  count = +Number.isFinite(count) && count;
  const setCount = () => {
    localStorage.setItem("count", count);
    elCount.textContent = count;
  };
  setCount();
  const handleClick = () => {
    count++;
    setCount();
  };
  elButton.addEventListener("click", handleClick);
})(document.getElementById.bind(document));
