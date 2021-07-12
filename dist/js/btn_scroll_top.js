// get a reference to our predefined button
var scrollToTopBtn = document.querySelector("#backToTop");

window.addEventListener("load", () => {
    scrollToTopBtn.classList.add("back-to-top-invisible");
});

window.addEventListener("scroll", () => {
    if (window.pageYOffset <= 200) {
        scrollToTopBtn.classList.add("back-to-top-invisible");
    } else {
        scrollToTopBtn.classList.remove("back-to-top-invisible");
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

scrollToTopBtn.addEventListener("click", scrollToTop);