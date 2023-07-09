'use client';

export default function Cheat() {
    return <div>
      <div className="u" onClick={() => GameManager.startTiles=Number(prompt('请输入你想要的开始方块数\n请输入 1 至 16 之间的数',2))||2}>作弊项 1: 改变开始方块数</div>
      <div className="u" onClick={() => confirm('确定要重置开始方块数吗')&&(GameManager.startTiles=2)}>作弊项 2: 重置开始方块数</div>
      <div className="u" onClick={() => GameManager.randomTiles=Number(prompt('请输入你想要的随机方块数\n请输入 1 至 16 之间的数',1))||1}>作弊项 3: 改变随机方块数</div>
      <div className="u" onClick={() => confirm('确定要重置随机方块数吗')&&(GameManager.randomTiles=1)}>作弊项 4: 重置随机方块数</div>
      <div className="u" onClick={() => GameManager.randomTile=prompt('请输入你想要的获得随机方块值的 js 表达式','Math.random()<0.9?2:4')||'Math.random()<0.9?2:4'}>作弊项 5: 改变随机方块值</div>
      <div className="u" onClick={() => confirm('确定要重置随机方块值吗')&&(GameManager.randomTile='Math.random()<0.9?2:4')}>作弊项 6: 重置随机方块值</div>
      <div className="u" onClick={() => (game.score=(Number(prompt('请输入你想要的分数',0))||0),game.actuate())}>作弊项 7: 改变分数</div>
      <div className="u" onClick={() => (game.storageManager.setBestScore((Number(prompt('请输入你想要的最高分',0))||0)),game.actuate())}>作弊项 8: 改变最高分</div>
    </div>;
};
