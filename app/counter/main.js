'use client';

import { useState, useEffect } from 'react';
import { parse } from 'qs';
import { usePathname, useRouter} from 'next/navigation';

const convert = str => {
    const index = str.indexOf('.');
    return index === -1 ? BigInt(str) : BigInt(str.slice(0, index));
};

export default function Component() {
    const [count, setCount] = useState(null);
    const router = useRouter();
    const pathname = usePathname();
    useEffect(() => {
        let c = convert(localStorage.getItem('count') || '0');
        const s = location.search.slice(1);
        if (s.length) {
            const obj = parse(s);
            if (Object.hasOwn(obj, 'set')) {
                c = convert(obj.set);
            }
            if (Object.hasOwn(obj, 'add')) {
                c += convert(obj.add);
            }
            if (Object.hasOwn(obj, 'mul')) {
                c *= convert(obj.mul);
            }
            if (Object.hasOwn(obj, 'div')) {
                c /= convert(obj.div);
            }
        }
        setCount(c);
        if (s.length) router.replace(pathname);
    }, [pathname]);
    useEffect(() => {
        if (count !== null) {
            localStorage.setItem('count', count.toString());
        }
    }, [count]);

    return (
        <>
            <h1>计数器</h1>
            <hr />
            <p>计数: {count?.toString()}</p>
            <button
                onClick={() => setCount(c => c + 1n)}
                style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '25%'
                }}>点击增加计数</button>
        </>
    );
};
