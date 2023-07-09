'use client';

import { useState, useRef } from 'react';

const handleClicker = (() => {
    const special = {
        'a': 1, 'j': 11, 'q': 12, 'k': 13
    };
    const opStrs = '+-×÷';
    const cardToNumber = card =>
        Object.hasOwn(special, card) ? special[card] : +card;
    const calc = (a, b, op) => {
        switch (op) {
            case 0: return a + b;
            case 1: return a - b;
            case 2: return a * b;
            case 3: return a / b;
        }
    };
    const multCalc = ([a, b, c, d], [op1, op2, op3]) =>
        [
            calc(a, calc(b, calc(c, d, op3), op2), op1),
            // a op1 (b op2 (c op3 d))
            calc(a, calc(calc(b, c, op2), d, op3), op1),
            // a op1 ((b op2 c) op3 d)
            calc(calc(a, calc(b, c, op2), op1), d, op3),
            // (a op1 (b op2 c)) op3 d
            calc(calc(calc(a, b, op1), c, op2), d, op3),
            // ((a op1 b) op2 c) op3 d
            calc(calc(a, b, op1), calc(c, d, op3), op2)
            // (a op1 b) op2 (c op3 d)
        ];
    const stringify = ([a, b, c, d], [op1, op2, op3], type) => {
        switch (type) {
            case 0: return (
                `${a}${opStrs[op1]}(${b}${opStrs[op2]}` +
                `(${c}${opStrs[op3]}${d}))`
            );
            case 1: return (
                `${a}${opStrs[op1]}((${b}${opStrs[op2]}` +
                `${c})${opStrs[op3]}${d})`
            );
            case 2: return (
                `(${a}${opStrs[op1]}(${b}${opStrs[op2]}` +
                `${c}))${opStrs[op3]}${d}`
            );
            case 3: return (
                `((${a}${opStrs[op1]}${b})${opStrs[op2]}` +
                `${c})${opStrs[op3]}${d}`
            );
            case 4: return (
                `(${a}${opStrs[op1]}${b})${opStrs[op2]}` +
                `(${c}${opStrs[op3]}${d})`
            );
        }
    };

    const _handleClicker = (input, target, setResult) => () => {
        const value = input.current.value.trim().toLowerCase();
        let nums;
        if (value.length === 4) {
            nums = value.split('').map(cardToNumber);
            if (nums.includes(NaN)) {
                setResult('请输入正确的格式');
                return;
            }
        } else {
            nums = value.split(' ').map(cardToNumber);
            if (nums.includes(NaN) ||
                nums.length !== 4) {
                setResult('请输入正确的格式');
                return;
            }
        }
        const begin = Date.now();
        const targetNumber = Number(target.current.value.trim());
        const results = calc24(nums, targetNumber);
        const end = Date.now();
        const msg = '用时 ' + Math.ceil(end - begin + 0.5) + ' 毫秒';
        if (!results.length) setResult(`${msg}, 无结果`);
        else setResult(`${msg}, 共 ${results.length} 个结果\n` +
            results.join('\n'));
    };

    function allMatrixes(nums) {
        if (nums.length === 1) {
            return [nums];
        }
        const results = [];
        outer:
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < i; j++) {
                if (nums[i] === nums[j]) {
                    continue outer;
                }
            }
            const arg = [...nums];
            const num = arg.splice(i, 1);
            const result = allMatrixes(arg);
            for (const item of result) {
                results.push([...num, ...item]);
            }
        }
        return results;
    }
    function calc24(nums, target) {
        const matrixes = allMatrixes(nums);
        const results = [];
        for (const nums of matrixes) {
            for (let i = 0; i < 64; i++) {
                const ops = [i & 3, (i >> 2) & 3, i >> 4];
                const calcResults = multCalc(nums, ops);
                for (let j = 0; j < 5; j++) {
                    if (Math.abs(calcResults[j] - target) < 1e-6) {
                        results.push(stringify(nums, ops, j) + "=" + target);
                    }
                }
            }
        }
        return results;
    }

    return _handleClicker;
})();

export default function Component() {
    const [result, setResult] = useState(null);
    const input = useRef(null);
    const target = useRef(null);

    const handleClick = handleClicker(input, target, setResult);

    return (
        <>
            <h1>24点计算器</h1>
            <hr />
            <p>输入四张牌的数字，用空格分隔:</p>
            <input ref={input} />
            <p>输入目标数字 (计算结果): </p>
            <input ref={target} defaultValue="24" />
            <button onClick={handleClick}>计算</button>
            {result && <>
                <p>计算结果:<br />
                <span style={{whiteSpace: 'pre-wrap'}}>{result}</span></p>
            </>}
        </>
    );
};
