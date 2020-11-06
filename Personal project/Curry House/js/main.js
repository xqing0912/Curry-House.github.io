const nav_button = document.querySelector(".nav_button");
const nav_bar = document.querySelector(".nav_bar");
const close = document.querySelector(".close");

window.addEventListener("load", () => {
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function () {
            FastClick.attach(document.body);
        }, false);
    }
    nav_button.addEventListener("click", () => {
        nav_bar.classList.remove("animate__fadeOutRightBig")
        nav_bar.classList.add("animate__fadeInRightBig");
        nav_bar.style.display = "block";
    });
    close.addEventListener("click", () => {
        nav_bar.classList.remove("animate__fadeInRightBig")
        nav_bar.classList.add("animate__fadeOutRightBig");        
        // nav_bar.style.display = "none";
    });

    // function hasClass(element, cls) {
    //     return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    // }
    // hasClass(document.querySelector("html"), 'no-js');
    // hasClass(() => {
    //     nav_bar.classList.contains("animate__fadeOutRightBig");
    // })
});