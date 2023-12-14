window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50) {

        document.getElementById("icon-text").style.fontSize = "14px";
        document.getElementById("icon").style.height = "25px";
        document.getElementById("icon").style.width = "25px";
        } else {

        document.getElementById("icon-text").style.fontSize = "28px";
        document.getElementById("icon").style.height = "100px";
        document.getElementById("icon").style.width = "100px";
    }
}