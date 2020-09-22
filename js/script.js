console.log("Hello, man. It's working.");

let theme = localStorage.getItem("theme")
if (theme == null) {
    setTheme("light")
} else {
    setTheme(theme)
}

let themeColor = document.getElementsByClassName("theme-color");

for (var i = 0; themeColor.length > i; i++) {
    themeColor[i].addEventListener("click", function() {
        let mode = this.dataset.mode;
        console.log("Option Clicked: ", mode);
        setTheme(mode);
    })
}

function setTheme(mode) {
    if (mode == "light") {
        document.getElementById("them-dot").href = "./css/style.css"
    }
    if (mode == "blue") {
        document.getElementById("them-dot").href = "./css/blue.css"
    }
    if (mode == "green") {
        document.getElementById("them-dot").href = "./css/green.css"
    }
    if (mode == "purple") {
        document.getElementById("them-dot").href = "./css/purple.css"
    }
    localStorage.setItem("THEME", mode)
}