import { applyHoverPlay, getVideoAttrs } from '../../utils/decorate.js';

export default function init(a) {
  const { href, hash } = a;
  const attrs = getVideoAttrs(hash);
  const video = `<video ${attrs}>
        <source src="${href}" type="video/mp4" />
      </video>`;
  if (!a.parentNode) return;
  a.insertAdjacentHTML('afterend', video);
  const videoElem = document.body.querySelector(`source[src="${href}"]`)?.parentElement;
  applyHoverPlay(videoElem);
  a.remove();
}
