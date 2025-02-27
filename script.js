// Button Color Toggle
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", () => {
    if (colorButton.classList.contains("green")) {
        colorButton.classList.remove("green");
        colorButton.style.backgroundColor = "blue";
    } else {
        colorButton.classList.add("green");
        colorButton.style.backgroundColor = "green";
    }
});

// Greeting Alert
document.getElementById("greetButton").addEventListener("click", () => {
    const currentHour = new Date().getHours();
    let greetingMessage = "";

    if (currentHour < 12) {
        greetingMessage = "Good morning!";
    } else if (currentHour < 18) {
        greetingMessage = "Good afternoon!";
    } else {
        greetingMessage = "Good evening!";
    }

    alert(greetingMessage);
});

// Basic Calculator
document.getElementById("addButton").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const resultDisplay = document.getElementById("result");

    if (!isNaN(num1) && !isNaN(num2)) {
        resultDisplay.textContent = "Result: " + (num1 + num2);
    } else {
        resultDisplay.textContent = "Please enter valid numbers.";
    }
});