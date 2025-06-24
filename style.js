setInterval(() => {
  const firework = document.createElement('div');
  firework.className = 'firework';
  firework.style.top = `${Math.random() * 100}%`;
  firework.style.left = `${Math.random() * 100}%`;
  document.body.appendChild(firework);
  setTimeout(() => firework.remove(), 1000);
}, 800);
