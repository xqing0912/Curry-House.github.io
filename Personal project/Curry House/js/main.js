const nav_button = document.querySelector(".nav_button");
const nav_bar = document.querySelector(".nav_bar");
const close = document.querySelector(".close");
const Features = document.querySelector(".features");
const FeaturesShell = document.querySelector(".features-shell");
const FeaturesContent = document.querySelector(".features-content");
window.addEventListener("load", () => {
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function () {
            FastClick.attach(document.body);
        });
    }
    //nav圖標打開點擊
    nav_button.addEventListener("click", () => {
        nav_bar.classList.remove("animate__fadeOutRightBig")
        nav_bar.classList.add("animate__fadeInRightBig");
        nav_bar.style.display = "block";
    });
    //nav圖標關閉點擊
    close.addEventListener("click", () => {
        nav_bar.classList.remove("animate__fadeInRightBig")
        nav_bar.classList.add("animate__fadeOutRightBig");
    });
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if (scrollVal > 130) {
            Features.classList.add("animateBox")
            Features.style.opacity = 1
            FeaturesShell.classList.add("animate");
            var timer = setInterval(() => {
                FeaturesContent.style.opacity = 1
                clearInterval(timer)
            }, 1500);
        }
    });
});