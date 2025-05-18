(el => {
  const elInput1 = el("input1");
  const elInput2 = el("input2");
  const elCheckbox1 = el("checkbox1");
  const elCheckbox2 = el("checkbox2");
  const elCheckbox3 = el("checkbox3");
  const elButton = el("button");
  const elImg = el("img");
  const handleClick = () => {
    const arr = [];
    if (!elCheckbox1.checked) {
      arr[0] = elInput1.value;
    }
    else {
      arr[2] = elInput1.value;
    }
    if (!elCheckbox2.checked) {
      arr[1] = elInput2.value;
    }
    else {
      arr[3] = elInput2.value;
    }
    const canvas = document.createElement("canvas");
    let width = 360, height = 360;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#000";
    const fontSize = 30;
    ctx.font = `${fontSize}px Helvetica,Arial,sans-serif`;
    const rightAngle = Math.PI / 2;
    ctx.translate(width / 2, height / 2);
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (const str of arr) {
        if (str) {
            ctx.save();
            const textWidth = ctx.measureText(str).width;
            ctx.scale((width / 1.2) / textWidth, height / fontSize);
            ctx.fillText(str, 0, 0);
            ctx.restore();
        }
        ctx.rotate(rightAngle);
        [width, height] = [height, width];
    }
    if (elCheckbox3.checked) {
      ctx.translate(-width / 2, -height / 2);
      ctx.fillStyle = "white";
      for (let y = 0; y < height; y += 3) {
          ctx.fillRect(0, y, width, 1);
      }
      for (let x = 0; x < width; x += 3) {
          ctx.fillRect(x, 0, 1, height);
      }
    }
    elImg.src = canvas.toDataURL("image/png");
    elImg.style.display = "block";
  };
  elButton.addEventListener("click", handleClick);
})(document.getElementById.bind(document));
