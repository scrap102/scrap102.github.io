const wheel = document.getElementById("wheel")
const winButton = document.getElementById("win-button")
const winPopup = document.getElementById("ad-popup1")

let currentRotation = 0
winButton.onclick = () => 
{
    let rotateDegrees = Math.random()*360*3+360*3
    currentRotation += rotateDegrees
    let transDuration = currentRotation/(Math.random()*360*2+360)
    wheel.style.transitionDuration = transDuration+"s"
    wheel.style.transform = "rotate("+currentRotation+"deg)"
    setTimeout(() => {
        let popupDuration = Math.random() * 6 + 1
        winPopup.style.animation = `ad-popup-anim ${popupDuration}s`
        if (Math.random() < 0.1)
        {
            winPopup.style.animation = `ad-popup-anim-rev ${popupDuration}s`
        }
        // winPopup.style.animationDuration = transDuration + "s"
        setTimeout(() => {
            winPopup.style.animation = ""
        }, 5000)
    }, transDuration*1000)
}
