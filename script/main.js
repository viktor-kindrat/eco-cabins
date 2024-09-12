let videoButton = document.getElementById("main-video-button");


videoButton.addEventListener("click", (e) => {
    let videoElement = document.getElementById("main-video-element")

    videoElement.volume = "0.5"

    if (videoElement.paused) {
        videoButton.querySelector(".play").style.display = "none"
        videoButton.querySelector(".pause").style.display = "block"
        videoElement.play()
    } else {
        videoButton.querySelector(".play").style.display = "block"
        videoButton.querySelector(".pause").style.display = "none"
        videoElement.pause()
    }
})

let headerBurgerButton = document.querySelector(".header__burger-btn");
headerBurgerButton.addEventListener("click", () => {
    headerBurgerButton.classList.toggle("header__burger-btn_active");
    document.querySelector(".header__nav").classList.toggle("header__nav_active")
});