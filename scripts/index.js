// TODO better organize javascript functions
// Header offset
const index = document.getElementById('index');
const header = document.getElementById('header');

index.style.minHeight = 'calc(100vh - ' + header.offsetHeight + 'px)';

// Cursor
/*
const cursorLeft = document.querySelector('.cursor-left');
const cursorRight = document.querySelector('.cursor-right');
const cursorBackgroundLeft = document.querySelector('.cursor-background-left');
const cursorBackgroundRight = document.querySelector('.cursor-background-right');

const positionElement = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorLeft.style.transform = `translate3d(calc(${mouseX}px + 1px), calc(${mouseY}px + 2px), 0)`;
  cursorRight.style.transform = `translate3d(calc(${mouseX}px + 1px), calc(${mouseY}px + 2px), 0)`;
  cursorBackgroundLeft.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  cursorBackgroundRight.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mouse-move', positionElement)*/