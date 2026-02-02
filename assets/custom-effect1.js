

document.addEventListener("DOMContentLoaded", function() {
  const total = 200;
  const wrap = document.querySelector('.wrap');
  if (!wrap) {
    console.error('Element .wrap nebyl nalezen');
    return;
  }
  for (let i = 1; i <= total; i++) {
    const tri = document.createElement('div');
    tri.className = 'tri';

    // Přidat element do wrap
    wrap.appendChild(tri);

    const size = Math.random() * 50; // náhodná velikost
    const rotate = Math.random() * 360; // náhodný úhel

    // Nastavení stylů
    tri.style.borderTop = `${size}px solid hsla(${Math.random() * 360}, 100%, 50%, 1)`;
    tri.style.borderRight = `${size}px solid transparent`;
    tri.style.borderLeft = `${size}px solid transparent`;
    tri.style.marginLeft = `-${size / 2}px`;
    tri.style.marginTop = `-${size / 2}px`;
    tri.style.filter = 'grayscale(1)';
    tri.style.position = 'absolute';
    tri.style.top = '50%';
    tri.style.left = '50%';
    tri.style.transform = `rotate(${rotate}deg) translate3d(0,0,-1500px) scale(0)`;

    // Zde je třeba přidat animace, nebo to zvládnout CSS
  }
});
