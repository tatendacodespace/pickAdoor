const vibes = [
  { type: 'quote', text: '“Be yourself; everyone else is already taken.” – Oscar Wilde' },
  { type: 'personality', text: 'You are: The Visionary 🌟 (ENFP)' },
  { type: 'music', text: 'Your vibe: Indie Pop 🎶' },
  { type: 'quote', text: '“Stay hungry, stay foolish.” – Steve Jobs' },
  { type: 'personality', text: 'You are: The Analyst 🧠 (INTJ)' },
  { type: 'music', text: 'Your vibe: Lo-fi Chill 💤' },
  { type: 'quote', text: '“Dream big and dare to fail.” – Norman Vaughan' },
  { type: 'personality', text: 'You are: The Adventurer 🧭 (ISFP)' },
  { type: 'music', text: 'Your vibe: Classic Rock 🤘' },
];

const doors = document.querySelectorAll('.door');
const reveal = document.getElementById('reveal');
const hoverSound = document.getElementById('hoverSound');
const openSound = document.getElementById('openSound');

// Add hover sound and animation
let hoverTimeout;
doors.forEach(door => {
  door.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
    door.classList.add('hovered');
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => door.classList.remove('hovered'), 400);
  });
});

// Door click event
let isRevealing = false;
doors.forEach(door => {
  door.addEventListener('click', () => {
    if (isRevealing || door.classList.contains('open')) return;
    isRevealing = true;
    openSound.currentTime = 0;
    openSound.play();
    door.classList.add('open');
    // suspense effect
    reveal.classList.remove('show');
    setTimeout(() => {
      const vibe = vibes[Math.floor(Math.random() * vibes.length)];
      door.querySelector('.door-back').textContent = vibe.text;
      reveal.textContent = vibe.text;
      reveal.classList.add('show');
      isRevealing = false;
    }, 1200);
  });
});

// Reset on click outside
window.addEventListener('click', e => {
  if (![...doors].some(door => door.contains(e.target))) {
    doors.forEach(door => door.classList.remove('open'));
    reveal.classList.remove('show');
  }
});
