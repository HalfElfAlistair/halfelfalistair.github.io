function hamburgerMenu() {

    // Assigns the navbar element as a variable
    const menu = document.getElementById("menu");

    // When the nav class is in it's standard state (assigned as "navbar" in HTML), it concatenates the string " switch" to add an alternate class. This new class is used in CSS to change the appearance of the page when the button is pressed. It reverts back to it's original class name when the button is pressed and the name already possessed the " switch" concatenation.
    if (menu.className === "navbar") {
        menu.className += " extend";
        // menu.className += " switch";
    } else {
        menu.className = "navbar";
    }
    }