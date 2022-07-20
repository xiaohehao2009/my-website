// https://www.zhihu.com/question/35074902

const tip1 = "格式错误";
const tip2 = "再玩就玩坏了";

function tipEl(el, tip) {
  el.innerHTML = tip;
}

const in1 = document.getElementById("in1");
const out1 = document.getElementById("out1");
const bt1 = document.getElementById("bt1");

bt1.onclick = function () {
  let num = +in1.value;
  if (Number.isNaN(num)) {
    tipEl(out1, tip1);
    return;
  }
  if (num < 1 || num > 999999 || !Number.isInteger(num)) {
    tipEl(out1, tip2);
    return;
  }
  num = num + (num % 2);
  let pi = 0;
  for (let i = 0, n = true; i < num; i++, n = !n) {
    if (n) {
      pi += 4 / (i * 2 + 1);
    } else {
      pi -= 4 / (i * 2 + 1);
    }
  }
  out1.innerHTML = pi;
};

const in2 = document.getElementById("in2");
const out2 = document.getElementById("out2");
const bt2 = document.getElementById("bt2");

bt2.onclick = function () {
  let num = +in2.value;
  if (Number.isNaN(num)) {
    tipEl(out2, tip1);
    return;
  }
  if (num < 1 || num > 5 || !Number.isInteger(num)) {
    tipEl(out2, tip2);
    return;
  }
  let a = 1, b = Math.SQRT1_2;
  const arra = [a], arrb = [b];
  for (let i = 0; i < num; i++) {
    const t1 = a, t2 = b;
    a = (t1 + t2) / 2;
    b = Math.sqrt(t1 * t2);
    arra.push(a);
    arrb.push(b);
  }
  const top = 2 * a * a;
  let undR = 0;
  for (let i = 0, n = 1; i <= num; i++, n *= 2) {
    undR += n * (arra[i] * arra[i] - arrb[i] * arrb[i]);
  }
  const pi = top / (1 - undR);
  out2.innerHTML = pi;
};
