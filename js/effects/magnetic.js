// Only enable on devices that support hover
if (!window.matchMedia('(hover: hover)').matches) {
  // don't run magnetic behavior on touch devices
} else {
  document.querySelectorAll('.magnetic').forEach(btn => {
    // guard in case element is not visible / has no bounding rect
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      // subtle transform; leave original transform on leaving
      btn.style.transform = `translate(${x * 0.06}px, ${y * 0.08}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}