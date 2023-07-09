'use client';

import { useState, useRef } from 'react';

export default function Component() {
    const ele = Array(4).fill(null).map(() => useRef(null));
    const canvas = useRef(null);

    function handleClick() {
        const messages = Array(4).fill(null);
        messages[ele[1].current.checked ? 2 : 0] = ele[0].current.value;
        messages[ele[3].current.checked ? 3 : 1] = ele[2].current.value;

        const eleCanvas = document.createElement('canvas');
        let width = 360, height = 360;
        [eleCanvas.width, eleCanvas.height] = [width, height];
        const ctx = eleCanvas.getContext('2d');

        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = 'black';

        ctx.font = '30px Impact, Charcoal, sans-serif';
        const rightAngle = Math.PI / 2;

        ctx.translate(width / 2, height / 2);
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        for (const msg of messages) {
            if (msg) {
                ctx.save();
                const textWidth = ctx.measureText(msg).width;
                ctx.scale((width / 1.2) / textWidth, height / 30);
                ctx.fillText(msg, 0, 0);
                ctx.restore();
            }
            ctx.rotate(rightAngle);
            [width, height] = [height, width];
        }

        // ctx.translate(-width / 2, -height / 2);
        // ctx.fillStyle = 'white';
        // for (let y = 0; y < height; y += 3) {
        //     ctx.fillRect(0, y, width, 1);
        // }
        // for (let x = 0; x < width; x += 3) {
        //     ctx.fillRect(x, 0, 1, height);
        // }

        const img = new Image();
        img.src = eleCanvas.toDataURL('image/png');
        img.style.border = 'red solid 2px';
        const current = canvas.current.firstElementChild;
        if (current) {
            canvas.current.removeChild(current);
        }
        canvas.current.appendChild(img);
    }

    return (
        <>
            <p>
            <label>请输入你想要藏字的文字 ( 竖向 ): <input ref={ele[0]} /></label>
            <br />
            <label>反向: <input type="checkbox" ref={ele[1]} /></label>
            </p>

            <p>
            <label>请输入你想要藏字的文字 ( 横向 ): <input ref={ele[2]} /></label>
            <br />
            <label>反向: <input type="checkbox" ref={ele[3]} /></label>
            </p>

            <div>
                <button
                    onClick={handleClick}
                    style={{height: '50px'}}>生成藏字图</button>
            </div>
            <div ref={canvas}></div>
        </>
    );
};
