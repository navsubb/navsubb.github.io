const viewer = document.querySelector('#image-viewer');
const preview = document.querySelector('#viewer-image');
const caption = document.querySelector('#viewer-caption');
const stage = document.querySelector('.viewer-stage');
let scale = 1;
let fittedWidth = 0;

function setZoom(nextScale) {
  if (!preview.complete || !preview.naturalWidth) return;
  if (scale === 1) fittedWidth = preview.getBoundingClientRect().width;
  scale = Math.max(1, Math.min(8, nextScale));
  viewer.classList.toggle('zoomed', scale > 1);
  preview.style.width = scale > 1 ? `${fittedWidth * scale}px` : '';
  preview.setAttribute('aria-pressed', String(scale > 1));
  preview.setAttribute('aria-label', `${scale > 1 ? 'Zoom out' : 'Zoom in'}: ${preview.alt}`);
  if (scale === 1) stage.scrollTo(0, 0);
}

function toggleZoom() {
  const width = preview.getBoundingClientRect().width;
  setZoom(scale > 1 ? 1 : Math.max(2, preview.naturalWidth / width));
}

// Keep ordinary image links working when the browser cannot show a dialog.
if (typeof viewer.showModal === 'function') {
  document.querySelectorAll('main a.image-link').forEach(link => {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const source = link.querySelector('img');
      stage.classList.toggle('mosaic-background', link.classList.contains('mosaic-image'));
      preview.src = link.href;
      preview.alt = source.alt;
      caption.textContent = preview.alt;
      scale = 1;
      viewer.classList.remove('zoomed');
      preview.style.width = '';
      preview.setAttribute('aria-pressed', 'false');
      preview.setAttribute('aria-label', `Zoom in: ${preview.alt}`);
      viewer.showModal();
      document.body.classList.add('viewer-open');
      stage.scrollTo(0, 0);
    });
  });

  preview.addEventListener('click', toggleZoom);
  preview.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleZoom();
    }
  });
  // Trackpad pinch and Ctrl + wheel zoom; ordinary scrolling pans the image.
  stage.addEventListener('wheel', event => {
    if (!event.ctrlKey) return;
    event.preventDefault();
    setZoom(scale * Math.exp(-event.deltaY * 0.01));
  }, { passive: false });

  viewer.addEventListener('click', event => {
    const bounds = viewer.getBoundingClientRect();
    if (event.target === viewer && (
      event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom
    )) viewer.close();
  });
  // Native dialog handles Escape, focus trapping, and returning focus to the link.
  viewer.addEventListener('close', () => document.body.classList.remove('viewer-open'));
}
