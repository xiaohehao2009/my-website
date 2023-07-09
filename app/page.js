import Link from 'next/link';

export const metadata = {
    title: '主页',
    description: '主页'
};

export default function Page() {
    return (
        <>
            <h1>主页</h1>
            <hr />
            <p><Link href="24card">24 点计算器</Link></p>
            <p><Link href="2048game">2048 小游戏</Link></p>
            <p><Link href="counter">计数器</Link></p>
            <p><a href="//rsstart.netlify.app/">人生重开模拟器</a></p>
            <p><Link href="canvastool">藏字图生成器</Link></p>
            <p><a href="//desmos.com/calculator">函数图象生成器</a></p>
        </>
    );
};
