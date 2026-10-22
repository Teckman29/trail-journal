// Find the button in our HTML
const colourButton = document.querySelector("#colourButton");

// Create a variable to track the background colour
let isGreen = false;

// Listen for a click
colourButton.addEventListener("click", function () {

    if (isGreen === false) {

        document.body.style.backgroundColor = "#dce9d5";

        isGreen = true;

    } else {

        document.body.style.backgroundColor = "#f2f0e8";

        isGreen = false;

    }

});

// Find all buttons with the detailsButton class
const detailsButtons = document.querySelectorAll(".detailsButton");

// Add a click event to each button
detailsButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Find the extra information in this card
        const extraDetails = button.nextElementSibling;

        // Check whether the information is hidden
        if (extraDetails.hidden === true) {

            extraDetails.hidden = false;
            button.textContent = "Show Less";
            button.setAttribute("aria-expanded", "true");

        } else {

            extraDetails.hidden = true;
            button.textContent = "Show More";
            button.setAttribute("aria-expanded", "false");

        }

    });

});

// Celebrate when a valid hike form is submitted.
const hikeForm = document.querySelector("#hikeForm");
const formSuccess = document.querySelector("#formSuccess");

hikeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formSuccess.hidden = false;
});

