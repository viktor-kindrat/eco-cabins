let videoButton = document.getElementById("main-video-button")

videoButton.addEventListener("click", (e) => {
    let videoElement = document.getElementById("main-video-element")
    console.log("OK")

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