// The native details menu remains usable even if JavaScript is unavailable.
const mobileMenu = document.querySelector('.mobile-menu');
if (mobileMenu) {
  const menuSummary = mobileMenu.querySelector('summary');
  const closeMenu = () => { mobileMenu.open = false; };

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
      menuSummary.focus({ preventScroll: true });
    });
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobileMenu.open) {
      closeMenu();
      menuSummary.focus({ preventScroll: true });
    }
  });
  document.addEventListener('click', event => {
    if (mobileMenu.open && !mobileMenu.contains(event.target)) closeMenu();
  });
  window.matchMedia('(min-width: 961px)').addEventListener('change', closeMenu);
}

// Keep the hero usable if the portrait image cannot be loaded.
const portraitPhoto = document.querySelector('.portrait-photo');
if (portraitPhoto) {
  const showPortraitFallback = () => {
    portraitPhoto.hidden = true;
    document.querySelector('.portrait-fallback').hidden = false;
  };
  portraitPhoto.addEventListener('error', showPortraitFallback, { once: true });
  if (portraitPhoto.complete && portraitPhoto.naturalWidth === 0) showPortraitFallback();
}
