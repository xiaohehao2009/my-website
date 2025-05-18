// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(() => {
  window.cheatInterface(new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager));
});
