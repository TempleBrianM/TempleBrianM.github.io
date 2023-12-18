const index = document.getElementById('index');
const header = document.getElementById('header');

index.style.minHeight = 'calc(100vh - ' + header.offsetHeight + 'px)';
