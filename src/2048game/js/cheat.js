window.cheatInterface = (el => {
  let game = null;
  el("cheat1").addEventListener("click", () => {
    const str = prompt("请输入你想要的开始方块数。\n请输入1至16之间的数。", 2);
    if (!str) {
      return;
    }
    const num = Math.floor(str);
    if (num > 0 && num < 17) {
      game.startTiles = num;
    }
  });
  el("cheat2").addEventListener("click", () => {
    if (confirm("确定要重置开始方块数吗？")) {
      game.startTiles = 2;
    }
  });
  el("cheat3").addEventListener("click", () => {
    const str = prompt("请输入你想要的随机方块数。\n请输入1至16之间的数。", 1);
    if (!str) {
      return;
    }
    const num = Math.floor(str);
    if (num > 0 && num < 17) {
      game.randomTiles = num;
    }
  });
  el("cheat4").addEventListener("click", () => {
    if (confirm("确定要重置随机方块数吗？")) {
      game.randomTiles = 1;
    }
  });
  el("cheat5").addEventListener("click", () => {
    const str = prompt("请输入你想要的随机方块值的JavaScript表达式。", "Math.random()<0.9?2:4");
    if (str) {
      game.randomTile = str;
    }
  });
  el("cheat6").addEventListener("click", () => {
    if (confirm("确定要重置随机方块值吗？")) {
      game.randomTile = "Math.random()<0.9?2:4";
    }
  });
  el("cheat7").addEventListener("click", () => {
    const str = prompt("请输入你想要的分数。", 0);
    if (!str) {
      return;
    }
    const num = Math.floor(str);
    if (num >= 0) {
      game.score = num;
      game.actuate();
    }
  });
  el("cheat8").addEventListener("click", () => {
    const str = prompt("请输入你想要的最高分。", 0);
    if (!str) {
      return;
    }
    const num = Math.floor(str);
    if (num >= 0) {
      game.storageManager.setBestScore(num);
      game.actuate();
    }
  });
  return obj => {
    if (!game) {
      game = obj;
    }
  };
})(document.getElementById.bind(document));
