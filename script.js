// Musik Play Button
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');

musicBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = "⏸ Pause Music";
  } else {
    bgMusic.pause();
    musicBtn.textContent = "🎵 Play Music";
  }
});

// Confetti
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettis = [];
const colors = ['#ffffff', '#ff99ff', '#cc99ff', '#e0b0ff', '#b57edc'];

for (let i = 0; i < 100; i++) {
  confettis.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 4 + 1,
    d: Math.random() * 50,
    color: colors[Math.floor(Math.random() * colors.length)],
    tilt: Math.floor(Math.random() * 10) - 10,
    tiltAngleIncremental: (Math.random() * 0.07) + .05,
    tiltAngle: 0
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettis.forEach(c => {
    ctx.beginPath();
    ctx.lineWidth = c.r;
    ctx.strokeStyle = c.color;
    ctx.moveTo(c.x + c.tilt + c.r, c.y);
    ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r);
    ctx.stroke();
  });
  updateConfetti();
  requestAnimationFrame(drawConfetti);
}

function updateConfetti() {
  confettis.forEach(c => {
    c.tiltAngle += c.tiltAngleIncremental;
    c.y += (Math.cos(c.d) + 1 + c.r / 2) / 2;
    c.x += Math.sin(0);
    c.tilt = Math.sin(c.tiltAngle - c.d / 3) * 15;
    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  });
}

drawConfetti();
