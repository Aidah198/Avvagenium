
// Select the theme button
const themeButton = document.getElementById("theme-toggle");

// Listen for a button click
themeButton.addEventListener("click", function () {

    // Switch between light and dark themes
    document.body.classList.toggle("dark");

    // Change the button symbol
    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀";
    } else {
        themeButton.textContent = "☾";
    }

});
