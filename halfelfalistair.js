function hamburgerMenu() {

    // Assigns the navbar element as a variable
    const x = document.getElementById("menu");

    // When the nav class is in it's standard state (assigned as "navbar" in HTML), it concatenates the string " switch" to add an alternate class. This new class is used in CSS to change the appearance of the page when the button is pressed. It reverts back to it's original class name when the button is pressed and the name already possessed the " switch" concatenation.
    if (x.className === "navbar") {
        x.className += " switch";
    } else {
        x.className = "navbar";
    }
    }