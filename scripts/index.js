var sections = document.getElementsByTagName('section')
var header = document.getElementsByTagName('header')
for (var i = 0; i < sections.length; i++) {
    console.log("calc(" + header[0].offsetHeight + "px + " + getComputedStyle(document.body).getPropertyValue('--section-margin') + " - 3px)")
    sections[i].style.scrollMarginTop = "calc(" + header[0].offsetHeight + "px + " + getComputedStyle(document.body).getPropertyValue('--section-margin') + " - 2px)";
}

document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");