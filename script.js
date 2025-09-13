// Countdown Timer
const eventDate = new Date('2025-12-20T08:00:00'); // Tanggal event
const countdownEl = document.getElementById('countdown');
function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;
    if (diff <= 0) {
        countdownEl.textContent = 'Event sedang berlangsung!';
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    countdownEl.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}
updateCountdown();
setInterval(updateCountdown, 1000);
