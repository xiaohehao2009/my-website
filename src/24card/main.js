(el => {
  const elInput1 = el("input1");
  const elInput2 = el("input2");
  const elButton = el("button");
  const elResult = el("result");
  const handleClick = () => {
    const nums = parseNums();
    if (nums === null) {
      setResult("四张牌的数字格式有误");
      return;
    }
    const target = parseTarget();
    if (target === null) {
      setResult("目标数字（计算结果）格式有误");
      return;
    }
    const startTime = Date.now();
    const result = calc(nums, target);
    const endTime = Date.now();
    const time = endTime - startTime;
    const str = formatResult(result, time);
    setResult(str);
  };
  const parseNums = () => {
    const str = elInput1.value.trim().toLowerCase();
    const arr = split(str).map(parseNum);
    if (arr.length !== 4 || arr.includes(null)) {
      return null;
    }
    return arr.sort((a, b) => b - a);
  };
  const split = str => {
    if (str.length === 4) {
      return str.split("");
    }
    return str.split(/\s+/);
  };
  const parseNum = str => {
    if (str === "a") return 1;
    if (str === "j") return 11;
    if (str === "q") return 12;
    if (str === "k") return 13;
    if (isNaN(str)) return null;
    return Math.floor(str);
  };
  const setResult = str => {
    elResult.textContent = str;
  };
  const parseTarget = () => {
    const str = elInput2.value.trim().toLowerCase();
    return parseNum(str);
  };
  const calc = (nums, target) => {
    const matrix = getMatrix(nums);
    const arr = [];
    for (const vec of matrix) {
      for (let i = 0; i < 320; i++) {
        const a = i >> 6;
        const b = i >> 4 & 3;
        const c = i >> 2 & 3;
        const d = i & 3;
        const num = calcs[a](vec, b, c, d);
        if (Math.abs(num - target) < 1e-7) {
          arr.push(`${formatEq[a](vec, opn[b], opn[c], opn[d])}=${target}`);
        }
      }
    }
    return arr;
  };
  const getMatrix = nums => {
    if (nums.length === 1) return [nums];
    const result = [];
    loop:
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] === nums[j]) {
          continue loop;
        }
      }
      const arr = [...nums];
      arr.splice(i, 1);
      const matrix = getMatrix(arr);
      for (const vec of matrix) {
        result.push([...vec, nums[i]]);
      }
    }
    return result;
  };
  const calcs = [
    // ((x + y) × z) ÷ w
    ([x, y, z, w], b, c, d) => op[d](op[c](op[b](x, y), z), w),
    // (x + (y × z)) ÷ w
    ([x, y, z, w], b, c, d) => op[d](op[b](x, op[c](y, z)), w),
    // (x + y) × (z ÷ w)
    ([x, y, z, w], b, c, d) => op[c](op[b](x, y), op[d](z, w)),
    // x + ((y × z) ÷ w))
    ([x, y, z, w], b, c, d) => op[b](x, op[d](op[c](y, z), w)),
    // x + (y × (z ÷ w))
    ([x, y, z, w], b, c, d) => op[b](x, op[c](y, op[d](z, w)))
  ];
  const op = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b
  ];
  const formatEq = [
    // ((x + y) × z) ÷ w
    ([x, y, z, w], b, c, d) => `((${x}${b}${y})${c}${z})${d}${w}`,
    // (x + (y × z)) ÷ w
    ([x, y, z, w], b, c, d) => `(${x}${b}(${y}${c}${z}))${d}${w}`,
    // (x + y) × (z ÷ w)
    ([x, y, z, w], b, c, d) => `(${x}${b}${y})${c}(${z}${d}${w})`,
    // x + ((y × z) ÷ w))
    ([x, y, z, w], b, c, d) => `${x}${b}((${y}${c}${z})${d}${w})`,
    // x + (y × (z ÷ w))
    ([x, y, z, w], b, c, d) => `${x}${b}(${y}${c}(${z}${d}${w}))`
  ];
  const opn = "+-×÷";
  const formatResult = (result, time) => {
    if (!result.length) {
      return `用时${time}毫秒，无结果`;
    }
    const prefix = `用时${time}毫秒，${result.length}个结果\n`;
    const str = result.join("\n");
    return prefix + str;
  };
  elButton.addEventListener("click", handleClick);
})(document.getElementById.bind(document));
