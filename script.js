function updateCountdown() {
  const target = new Date('2025-05-15T09:00:00');
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    const banner = document.getElementById('countdown-banner');
    if (banner) {
      banner.innerHTML = '<div style="font-family: Syne, sans-serif; font-size: 14px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; width: 100%; text-align: center;">🛫 Altitude est lancé — tarif ambassadeur expiré</div>';
    }
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const dEl = document.getElementById('days');
  const hEl = document.getElementById('hours');
  const mEl = document.getElementById('minutes');
  const sEl = document.getElementById('seconds');

  if (dEl) dEl.textContent = String(days).padStart(2, '0');
  if (hEl) hEl.textContent = String(hours).padStart(2, '0');
  if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
  if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
}

document.addEventListener('DOMContentLoaded', () => {
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
