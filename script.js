
const themeButton = document.getElementById("theme-button");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
} else {
    document.body.classList.remove("light-mode");
}

function updateThemeButton() {
    if (!themeButton) return;

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "🌙 Dark Mode";
    } else {
        themeButton.textContent = "☀️ Light Mode";
    }
}

updateThemeButton();

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        const isLightMode =
            document.body.classList.contains("light-mode");

        localStorage.setItem(
            "theme",
            isLightMode ? "light" : "dark"
        );

        updateThemeButton();
    });
}
