'use client';

import { useState, useEffect } from 'react';
import { parse } from 'qs';

export default function Component() {
    const [count, setCount] = useState(null);
    useEffect(() => {
        let c = +localStorage.getItem('count') || 0;
        const s = location.search.slice(1);
        if (s.length) {
            const obj = parse(s);
            if (Object.hasOwn(obj, 'set')) {
                c = +obj.set;
            }
            if (Object.hasOwn(obj, 'add')) {
                c += obj.add;
            }
            if (Object.hasOwn(obj, 'mul')) {
                c *= obj.mul;
            }
            if (Object.hasOwn(obj, 'div')) {
                c = Math.floor(c / obj.div);
            }
        }
        setCount(c);
    }, []);
    useEffect(() => {
        if (count !== null) localStorage.setItem('count', String(count));
    }, [count]);

    return (
        <>
            <h1>计数器</h1>
            <hr />
            <p>计数: {count}</p>
            <button
                onClick={() => setCount(count + 1)}
                style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '25%'
                }}>点击增加计数</button>
        </>
    );
};
