document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.dora-stars-background');
  if (!container) return;

  const starCount = 30; // počet hvězd
  const minSize = 8; // min veľkosť v px
  const maxSize = 30; // max veľkosť v px

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('img');
    star.src = 'https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png';
    star.className = 'hero-star';

    const leftPercent = Math.random() * 120 - 10; // od -10% do +110%
    const bottomPercent = Math.random() * 80 + 10; // 10%-90%
    const size = Math.random() * (maxSize - minSize) + minSize;

    star.style.position = 'absolute';
    star.style.left = leftPercent + '%';
    star.style.bottom = bottomPercent + '%';
    star.style.width = size + 'px';
    star.style.height = size + 'px';

    star.style.zIndex = 90;
    star.style.opacity = 0;

    // náhodný čas blikání (například od 0.3 do 0.8s)
    const blinkDuration = (Math.random() * 3.33 + 10).toFixed(2); // např. 0.3 - 0.8
    const blinkDelay = Math.random() * 1; // náhodné zpoždění začátku blikání (0-2s)

    star.style.animation = `
      star-move 35s linear infinite,
      star-twinkle ${blinkDuration}s ease-in-out ${blinkDelay}s infinite`;

    container.appendChild(star);
  }
});
