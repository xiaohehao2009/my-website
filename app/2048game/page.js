import './style/main.css';
import Script from 'next/script';
import Cheat from './js/cheat';

export const metadata = {
    title: '2048',
    description: '2048'
};

export default () =>
(
<body>
  <div className="container">
    <div className="heading">
      <h1 className="title">2048</h1>
      <div className="scores-container">
        <div className="score-container">0</div>&nbsp;
        <div className="best-container">0</div>
      </div>
    </div>

    <div className="above-game">
      <p className="game-intro">合成更大的数字, 努力达到 <strong>2048!</strong></p>
      <a className="restart-button">新游戏</a>
    </div>

    <div className="game-container">
      <div className="game-message">
        <p></p>
        <div className="lower">
          <a className="keep-playing-button">继续游戏</a>
          <a className="retry-button">重新开始</a>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-row">
          <div className="grid-cell"></div>
          <div className="grid-cell"></div>
          <div className="grid-cell"></div>
          <div className="grid-cell"></div>
        </div>
        <div className="grid-row">
          <div className="grid-cell"></div>
          <div className="grid-cell"></div>
          <div className="grid-cell"></div>
          <div className="grid-cell"></div>
        </div>
        <div className="grid-row">
          <div className="grid-cell"></div>
          <div className="grid-cell"></div>
          <div className="grid-cell"></div>
          <div className="grid-cell"></div>
        </div>
        <div className="grid-row">
          <div className="grid-cell"></div>
          <div className="grid-cell"></div>
          <div className="grid-cell"></div>
          <div className="grid-cell"></div>
        </div>
      </div>

      <div className="tile-container">

      </div>
    </div>

    <p className="game-explanation">
      <strong className="important">玩法:</strong> 使用你的 <strong>方向键</strong> 移动方块。如果两个相同的方块碰到一起, 它们会 <strong>变成一个新的方块 !</strong>
    </p>
    <hr />
    <p>
      由 <a href="http://gabrielecirulli.com" target="_blank">Gabriele Cirulli</a> 制作, 基于 <a href="https://itunes.apple.com/us/app/1024!/id823499224" target="_blank">Veewo Studio 的 1024,</a> 概念上类似于 <a href="http://asherv.com/threes/" target="_blank">Asher Vollmer 的 Threes</a>。
    </p>
    <hr />
    <p>
      <strong className="important">作弊:</strong>
    </p>
    <Cheat />
  </div>

  <Script src="/2048game/bind_polyfill.js" />
  <Script src="/2048game/classlist_polyfill.js" />
  <Script src="/2048game/animframe_polyfill.js" />
  <Script src="/2048game/keyboard_input_manager.js" />
  <Script src="/2048game/html_actuator.js" />
  <Script src="/2048game/grid.js" />
  <Script src="/2048game/tile.js" />
  <Script src="/2048game/local_storage_manager.js" />
  <Script src="/2048game/game_manager.js" />
  <Script src="/2048game/application.js" />
</body>
);
