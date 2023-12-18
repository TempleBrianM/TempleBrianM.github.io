// TODO better organize javascript functions
// Header offset
const index = document.getElementById('index');
const header = document.getElementById('header');

index.style.minHeight = 'calc(100vh - ' + header.offsetHeight + 'px)';

const cursorLeft = document.querySelector('.cursor-left');
const cursorRight = document.querySelector('.cursor-right');

// Cursor
const positionElement = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorLeft.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  cursorRight.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove', positionElement)