const gnome = document.querySelector('.gnome');
const achievementStatus = document.querySelector('#achievement-status');
let dismissToast;

gnome.classList.add('toast-ready');
gnome.addEventListener('toggle', () => {
  clearTimeout(dismissToast);
  achievementStatus.textContent = '';
  if (!gnome.open) return;
  achievementStatus.textContent = 'Achievement unlocked: Gnome delivery confirmed.';
  dismissToast = setTimeout(() => { gnome.open = false; }, 5000);
});
