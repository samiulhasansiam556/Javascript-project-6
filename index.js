

const buttonsEl = document.querySelectorAll(".div1");

const inputFieldEl = document.getElementById("input");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputFieldEl.value = "";
}

function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
  //   inputFieldEl.value = inputFieldEl.value + buttonValue;
}




document.addEventListener('DOMContentLoaded', function () {
  // Get the element containing your name
  var yourNameElement = document.getElementById('yourName');

  // Show your name
  yourNameElement.style.display = 'block';
  

  // Hide your name after 5 seconds
  setTimeout(function () {
    yourNameElement.style.display = 'none';
  }, 5000);
});


