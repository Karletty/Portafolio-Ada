const loadingPage = document.querySelector(".loading-page");
window.addEventListener("load", function () {
    this.setTimeout(() => {
        loadingPage.classList.toggle("loaderhide");
    }, 500);
});