(() => {
  const stage = document.querySelector('.map-stage');
  const controls = document.querySelector('.zoom');
  const buttons = [...document.querySelectorAll('[data-zoom]')];
  const status = document.querySelector('#zoom-status');
  controls.hidden = false;
  buttons.forEach(button => button.addEventListener('click', () => {
    const zoom = button.dataset.zoom;
    stage.dataset.zoom = zoom;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    status.textContent = zoom === 'fit' ? '适合宽度' : `${zoom}% · 可横向滚动`;
  }));
})();
