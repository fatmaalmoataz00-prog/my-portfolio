const themeButton = document.getElementById("theme-button");
const fileInput = document.getElementById("assignmentFile");
const list = document.getElementById("assignmentsList");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
} else {
    document.body.classList.remove("light-mode");
}

function updateThemeButton() {
    if (!themeButton) return;

    themeButton.textContent =
        document.body.classList.contains("light-mode")
            ? "🌙 Dark Mode"
            : "☀️ Light Mode";
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

if (fileInput && list) {
    fileInput.addEventListener("change", function () {
        const file = fileInput.files[0];
        if (!file) return;

        const empty = list.querySelector(".empty-message");
        if (empty) empty.remove();

        const item = document.createElement("div");
        item.className = "assignment-item";

        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.textContent = file.name;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        item.appendChild(link);
        list.appendChild(item);

        fileInput.value = "";
    });
}