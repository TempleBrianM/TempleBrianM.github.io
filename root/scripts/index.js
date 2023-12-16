const index = document.getElementById('index');
const header = document.getElementById('header');

index.style.height = 'calc(100vh - ' + header.offsetHeight + 'px)';
