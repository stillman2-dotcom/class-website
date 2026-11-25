// Find the Dance Mode button and message
const danceButton = document.querySelector("#dance-button");
const danceMessage = document.querySelector("#dance-message");
const danceGif = document.querySelector("#dance-gif");
// Listen for a button click
danceButton.addEventListener("click", function() {

    // Show or hide the dance message
    danceMessage.hidden = !danceMessage.hidden;
danceGif.hidden = !danceGif.hidden;
    // Change the button text
    if (danceMessage.hidden) {
        danceButton.textContent = "💃 Turn On Dance Mode!";
    } else {
        danceButton.textContent = "🪩 Turn Off Dance Mode!";
    }

});

// Find the Mood Picker elements
const moodInput = document.querySelector("#mood-color");
const moodBox = document.querySelector("#mood-box");

// Listen for typing in the input field
moodInput.addEventListener("input", function() {
    const color = moodInput.value.trim();

    // Change the mood box when a valid color is entered
    if (CSS.supports("color", color)) {
        moodBox.style.backgroundColor = color;
        moodBox.textContent = "Your mood color is " + color + "!";
    } else if (color === "") {
        moodBox.style.backgroundColor = "#F8D7E3";
        moodBox.textContent = "Your mood color will appear here!";
    }
});
const favoriteInput = document.querySelector("#favorite-input");
const favoriteList = document.querySelector("#favorite-list");

document.querySelector("#add-favorite").addEventListener("click", function() {
    if (favoriteInput.value.trim() !== "") {
        const item = document.createElement("li");
        item.textContent = favoriteInput.value;
        favoriteList.appendChild(item);
        favoriteInput.value = "";
    }
});