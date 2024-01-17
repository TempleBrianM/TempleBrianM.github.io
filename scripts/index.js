var sections = document.getElementsByTagName('section');
var header = document.getElementsByTagName('header');
var main = document.getElementsByTagName('main');
var footer = document.getElementsByTagName('footer');

// Offsets scroll top margin of all sections so as to prevent top from being covered by the header
for (var i = 0; i < sections.length; i++) {
    sections[i].style.scrollMarginTop = "calc(" + header[0].offsetHeight + "px + " + getComputedStyle(document.body).getPropertyValue('--section-margin') + " - 2px)";
}

// Make page at least as big as the window so that the footer remains at the bottom
main[0].style.minHeight = "calc(100vh - " + header[0].offsetHeight  + "px - " + getComputedStyle(document.body).getPropertyValue('--section-margin') + " - "+ footer[0].offsetHeight + "px)"

// Sets style.css variable --scrollbar-width to the actual width of the scroll bar
document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");