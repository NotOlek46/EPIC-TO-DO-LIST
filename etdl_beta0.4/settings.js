const settings = document.getElementById("settings")
const overlay = document.getElementById("filter")

function displaySettings(){
    settings.style.display = "block"
    overlay.style.display = "block"
}
function undisplaySettings(){
    settings.style.display = "none"
    overlay.style.display = "none"
}

document.addEventListener("keyup", function(event) {
    if (event.key === "Escape") {
    settings.style.display = "none"
    overlay.style.display = "none"
    }
});