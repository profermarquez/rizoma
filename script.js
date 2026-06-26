const viewer = document.querySelector('#viewer');
const viewerTitle = document.querySelector('#viewer-title');
const viewerType = document.querySelector('#viewer-type');
const viewerBody = document.querySelector('#viewer-body');
const closeViewer = document.querySelector('#close-viewer');

function stopMedia() {
  viewerBody.querySelectorAll('video, audio').forEach((media) => {
    media.pause();
    media.currentTime = 0;
  });

  viewerBody.querySelectorAll('iframe').forEach((iframe) => {
    iframe.src = 'about:blank';
  });
}

function openResource(key) {
  const template = document.querySelector(`#tpl-${key}`);
  if (!template) return;

  stopMedia();
  viewerBody.replaceChildren(template.content.cloneNode(true));
  viewerTitle.textContent = template.dataset.title || 'Recurso';
  viewerType.textContent = template.dataset.type || 'Recurso';

  if (typeof viewer.showModal === 'function') {
    viewer.showModal();
  } else {
    viewer.setAttribute('open', '');
  }
}

function closeResource() {
  stopMedia();

  if (viewer.open && typeof viewer.close === 'function') {
    viewer.close();
  } else {
    viewer.removeAttribute('open');
  }

  viewerBody.replaceChildren();
}

document.querySelectorAll('[data-resource]').forEach((trigger) => {
  trigger.addEventListener('click', () => openResource(trigger.dataset.resource));
});

closeViewer.addEventListener('click', closeResource);
viewer.addEventListener('click', (event) => {
  const rect = viewer.getBoundingClientRect();
  const clickedBackdrop = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (clickedBackdrop) closeResource();
});
viewer.addEventListener('close', stopMedia);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && viewer.open) closeResource();
});
