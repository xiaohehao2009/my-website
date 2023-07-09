'use client';

import { useState, useEffect } from 'react';

export default function Component() {
    const [count, setCount] = useState(null);
    useEffect(() => {
        setCount(+localStorage.getItem('count') || 0);
    }, []);
    useEffect(() => {
        localStorage.setItem('count', String(count));
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
