const quotes = document.querySelector('.testimonial-quotes');
const track = quotes.querySelector('.quote-track');
const original = track.querySelector('.quote-set');
const copy = original.cloneNode(true);
copy.classList.add('quote-copy');
copy.setAttribute('aria-hidden', 'true');
track.append(copy);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let animation;
let drag;

function updateMotion() {
  const width = original.getBoundingClientRect().width;
  const duration = width / 28 * 1000;
  const offset = animation?.currentTime;
  animation?.cancel();
  animation = undefined;
  quotes.classList.toggle('can-drag', !reducedMotion.matches);

  if (!reducedMotion.matches && width > 0) {
    quotes.scrollLeft = 0;
    animation = track.animate(
      [{ transform: 'translateX(0)' }, { transform: `translateX(${-width}px)` }],
      { duration, iterations: Infinity },
    );
    if (offset !== undefined) animation.currentTime = offset;
  }
}

function shiftQuotes(pixels) {
  const duration = animation.effect.getTiming().duration;
  const time = animation.currentTime + pixels / 28 * 1000;
  animation.currentTime = ((time % duration) + duration) % duration;
}

updateMotion();
new ResizeObserver(updateMotion).observe(original);
reducedMotion.addEventListener('change', updateMotion);
quotes.addEventListener('pointerdown', event => {
  if (!animation || !event.isPrimary || event.button !== 0) return;
  drag = { id: event.pointerId, x: event.clientX };
  quotes.setPointerCapture(event.pointerId);
  quotes.classList.add('dragging');
});
quotes.addEventListener('pointermove', event => {
  if (!animation || drag?.id !== event.pointerId) return;
  shiftQuotes(drag.x - event.clientX);
  drag.x = event.clientX;
});
quotes.addEventListener('lostpointercapture', event => {
  if (drag?.id !== event.pointerId) return;
  drag = undefined;
  quotes.classList.remove('dragging');
});
quotes.addEventListener('keydown', event => {
  if (!animation || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  shiftQuotes(event.key === 'ArrowRight' ? 100 : -100);
});
