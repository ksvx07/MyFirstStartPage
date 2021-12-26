const resetInput = document.querySelector(".resetIcon");


function resetClick() {
    localStorage.clear();
    window.location.reload();
}

function resetMouseEnter() {
    resetInput.src = "js/icon/resetText.png";
    resetInput.classList.add("resetOn");
}

function resetMouseLeave() {
    resetInput.src = "js/icon/whiteReset.png";
    resetInput.classList.remove("resetOn");
}

resetInput.addEventListener("mouseenter", resetMouseEnter);
resetInput.addEventListener("mouseleave", resetMouseLeave);
resetInput.addEventListener("click", resetClick);