const tempInput = document.getElementById("temp");
const convertToFBtn = document.getElementById("convert-to-f");
const convertToCBtn = document.getElementById("convert-to-c");
const resultDiv = document.getElementById("result");

convertToFBtn.addEventListener("click", function() {
    if (tempInput.value) {
        const fahrenheit = (parseFloat(tempInput.value) * 9/5) + 32;
        resultDiv.innerText = parseFloat(tempInput.value) + "°C is " + fahrenheit.toFixed(2) + "°F";
    } else {
        resultDiv.innerText = "Please enter a temperature.";
    }
});

convertToCBtn.addEventListener("click", function() {
    if (tempInput.value) {
        const celsius = (parseFloat(tempInput.value) - 32) * 5/9;
        resultDiv.innerText = parseFloat(tempInput.value) + "°F is " + celsius.toFixed(2) + "°C";
    } else {
        resultDiv.innerText = "Please enter a temperature.";
    }
});
