document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll(".button button");
    const yesButton = buttons[0]; // First button (Yes)
    const noButton = buttons[1]; // Second button (No)
    const buttonContainer = document.querySelector(".button");

    noButton.addEventListener("click", function(){
        noButton.style.transition = "transform 0.5s ease, opacity 0.5s ease";
        noButton.style.transform = "scale(0.5)";
        noButton.style.opacity = "0";
        noButton.style.pointerEvents = "none"; 

        setTimeout(() => {
            noButton.style.display = "none"; 
        }, 500); // Hide after animation

        yesButton.style.transition = "transform 0.5s ease, margin 0.5s ease";
        yesButton.style.transform = "scale(1.5)";
        yesButton.style.marginTop = "20px";
    });
});
