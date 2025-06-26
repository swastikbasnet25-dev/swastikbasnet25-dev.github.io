let modeButton = document.getElementById("mode-button");

function toggleMode() {
    // 1. CHANGE: Default is now "light" if nothing is stored
    let currentMode = sessionStorage.getItem("mode") || "light";

    // This logic flips the mode correctly
    currentMode = currentMode === "light" ? "dark" : "light";
    
    sessionStorage.setItem("mode", currentMode);
    document.body.classList.toggle("light-mode");
    document.body.style.transition = "0.5s";

    let icons = document.querySelectorAll(".contact-details");
    // BUG FIX: Changed loop from i <= icons.length to i < icons.length
    for (let i = 0; i < icons.length; i++) {
        icons[i].classList.toggle("icon-light-mode");
        icons[i].style.transition = "0.5s";
    }
}

modeButton.addEventListener("click", toggleMode);

window.addEventListener("load", function () {
    let selectedMode = sessionStorage.getItem("mode");

    // 2. CHANGE: The page is light by default. We only act if the stored mode is 'dark'.
    // If 'selectedMode' is null, we do nothing, leaving it in the default light state.
    if (selectedMode === "dark") {
        // Since the toggle function correctly flips the state, we can just call it once
        // to switch from the default light state to the saved dark state.
        toggleMode();
    }
});