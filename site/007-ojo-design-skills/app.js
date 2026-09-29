(() => {
  const panels = [...document.querySelectorAll('.module-panel')];
  const links = [...document.querySelectorAll('.module-link')];
  const previous = document.querySelector('#previous');
  const next = document.querySelector('#next');
  const progress = document.querySelector('#progress');
  let current = 0;
  function select(index, focus = false) {
    current = Math.max(0, Math.min(panels.length - 1, index));
    panels.forEach((panel, i) => { panel.hidden = i !== current; });
    links.forEach((link, i) => {
      if (i === current) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    previous.disabled = current === 0;
    next.disabled = current === panels.length - 1;
    progress.textContent = `${String(current + 1).padStart(2, '0')} / ${panels.length}`;
    if (focus) panels[current].querySelector('h3').focus({ preventScroll: true });
  }
  function fromHash() {
    const index = panels.findIndex(panel => '#' + panel.id === location.hash);
    if (index >= 0) select(index);
  }
  document.body.classList.add('interactive');
  document.querySelector('.pager').hidden = false;
  select(0);
  fromHash();
  document.addEventListener('click', event => {
    const anchor = event.target.closest('a[href^="#module-"]');
    if (!anchor) return;
    const index = panels.findIndex(panel => '#' + panel.id === anchor.getAttribute('href'));
    if (index < 0) return;
    event.preventDefault();
    history.pushState(null, '', anchor.getAttribute('href'));
    select(index, true);
    panels[index].scrollIntoView({ behavior: 'auto', block: 'start' });
  });
  function move(direction) {
    select(current + direction, true);
    history.pushState(null, '', '#' + panels[current].id);
    panels[current].scrollIntoView({ behavior: 'auto', block: 'start' });
  }
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  window.addEventListener('hashchange', fromHash);
  window.addEventListener('popstate', fromHash);
  const routeButtons = [...document.querySelectorAll('[data-route]')];
  function route(name) {
    routeButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.route === name)));
    document.querySelectorAll('.route').forEach(panel => { panel.hidden = panel.id !== `route-${name}`; });
  }
  document.querySelector('.route-controls').hidden = false;
  routeButtons.forEach(button => button.addEventListener('click', () => route(button.dataset.route)));
  route('convention');
})();
