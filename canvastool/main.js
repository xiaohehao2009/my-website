function draw(messages) {
    const canvas = document.createElement("canvas");
    if (!canvas.getContext) {
        return;
    }
    let width = 360, height = 360;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#000";

    const template = "px Impact,Charcoal,sans-serif";
    const rightAngle = Math.PI * 90 / 180;

    ctx.translate(width / 2, height / 2);
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (const msg of messages) {
        ctx.font = height + template;
        if (msg) {
            ctx.save();
            const textWidth = ctx.measureText(msg).width;
            ctx.scale((width / 1.35) / textWidth, 1);
            ctx.fillText(msg, 0, 0);
            ctx.restore();
        }
        ctx.rotate(rightAngle);
        [width, height] = [height, width];
    }

    // ctx.translate(-(width / 2), -(height / 2));
    // ctx.fillStyle = "#fff";
    // for (let y = 0; y < height; y += 3) {
        // ctx.fillRect(0, y, width, 1);
    // }
    // for (let x = 0; x < width; x += 3) {
        // ctx.fillRect(x, 0, 1, height);
    // }

    const img = new Image();
    img.src = canvas.toDataURL("image/png");
    img.style.border = "red solid 2px";
    return img;
}
(function () {
    const e = id => document.getElementById(id);
    const arr = [[e("in1"), e("cb1")], [e("in2"), e("cb2")]];
    const result = e("result");
    let first = true;
    e("btn").addEventListener("click", function () {
        if (first) {
            first = false;
        }
        else {
            result.removeChild(result.lastChild);
        }
        const messages = Array(4).fill(null);
        for (let i = 0; i < arr.length; i++) {
            const reversed = arr[i][1].checked;
            const value = arr[i][0].value;
            if (value.length) {
                messages[reversed ? (i + 2) : i] = value;
            }
        }
        result.appendChild(draw(messages));
    });
}());
