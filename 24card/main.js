(function() {
    const e = id => document.getElementById(id);
    const input = e("input");
    const targetEle = e("target");
    const button = e("button");
    const time = e("time");
    const output = e("output");

    function fn(el) {
        el.innerHTML = "请输入正确的格式！";
    }

    function fn2(o) {
        switch (o) {
            case "a":
                return 1;
            case "j":
                return 11;
            case "q":
                return 12;
            case "k":
                return 13;
            default:
                return +o;
        }
    }

    button.onclick = function() {
        const value = input.value.trim().toLowerCase();
        let nums;
        if (value.length === 4) {
            nums = value.split("").map(fn2);
            if (nums.includes(NaN)) {
                fn(output);
                return;
            }
        } else {
            nums = value.split(/\s+|,/).map(fn2);
            if (nums.includes(NaN) ||
                nums.length !== 4) {
                fn(output);
                return;
            }
        }
        const begin = Date.now();
	const target = Number(targetEle.value);
        const result = calc(nums, target);
        const end = Date.now();
        time.innerHTML = (end - begin) / 1000 + " 秒"
        if (!result.length) {
            output.innerHTML = "无结果";
        } else {
            output.innerHTML = result.length + " 个结果<br />" + result.join("<br />");
        }
    }

    function calc(a, b, op) {
        switch (op) {
            case 0:
                return a + b;
            case 1:
                return a * b;
            case 2:
                return a - b;
            case 3:
                return a / b;
        }
    }

    function strop(op) {
        switch (op) {
            case 0:
                return "+";
            case 1:
                return "*";
            case 2:
                return "-";
            case 3:
                return "/";
        }
    }

    function allMatrixs(nums) {
        if (nums.length === 1) {
            return [nums];
        }
        const results = [];
        outer: for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < i; j++) {
                if (nums[i] === nums[j]) {
                    continue outer;
                }
            }
            const arg = [...nums];
            const num = arg.splice(i, 1);
            const result = allMatrixs(arg);
            for (const item of result) {
                results.push([...num, ...item]);
            }
        }
        return results;
    }

    function calcNums([a, b, c, d], [o, p, q], flag) {
        switch (flag) {
            case 0:
                return calc(calc(a, b, o), calc(c, d, q), p);
            case 1:
                return calc(calc(calc(a, b, o), c, p), d, q);
            case 2:
                return calc(calc(a, calc(b, c, p), o), d, q);
            case 3:
                return calc(a, calc(calc(b, c, p), d, q), o);
            case 4:
                return calc(a, calc(b, calc(c, d, q), p), o);
        }
    }

    function stringify([a, b, c, d], [o1, p1, q1], flag) {
        const o = strop(o1), p = strop(p1), q = strop(q1);
        switch (flag) {
            case 0:
                return "(" + a + o + b + ")" + p + "(" + c + q + d + ")";
            case 1:
                return "((" + a + o + b + ")" + p + c + ")" + q + d;
            case 2:
                return "(" + a + o + "(" + b + p + c + "))" + q + d;
            case 3:
                return a + o + "((" + b + p + c + ")" + q + d + ")";
            case 4:
                return a + o + "(" + b + p + "(" + c + q + d + "))";
        }
    }

    function is(num, target) {
        return Math.abs(num - target) < 1e-7;
    }

    function calc(nums, target) {
        const arr = allMatrixs(nums);
        const results = [];
        for (const nums of arr) {
            for (let i = 0; i < 64; i++) {
                for (let flag = 0; flag < 5; flag++) {
                    const ops = [
                        i & 3, (i & 12) >> 2,
                        i >> 4
                    ];
                    const num = calcNums(nums, ops, flag);
                    if (is(num, target)) {
                        results.push(stringify(nums, ops, flag) + " = 24");
                    }
                }
            }
        }
        return results;
    }
}());
