// Uses the header's height to set a the index section's minimum height.
function setMinHeightIndex() {
    const INDEX = document.getElementById('index');
    const HEADER = document.getElementById('header');

    INDEX.style.minHeight = 'calc(100vh - ' + HEADER.offsetHeight + 'px)';
}