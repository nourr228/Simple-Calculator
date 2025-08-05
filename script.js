let total = 0;
function writeToScreen(enteredValue) {
  if (document.getElementById("result").value === "0") {
    document.getElementById("result").value = "";
  }
  let expression =
    document.getElementById("result").value[
      document.getElementById("result").value.length - 1
    ];

  if (checkOperation(enteredValue) && isExpression(expression)) {
    if (expression !== enteredValue && isExpression(expression)) {
      document.getElementById("result").value =
        document
          .getElementById("result")
          .value.substring(
            0,
            document.getElementById("result").value.length - 1
          ) + enteredValue;
    }
    return;
  } else {
    if (!isExpression(enteredValue) && !isExpression(expression)) {
      document.getElementById("result").value += enteredValue;
    } else {
      document.getElementById("result").value += " " + enteredValue;
    }
  }
}

function clearScreen() {
  document.getElementById("result").value = "0";
}

function clearLastCharacter() {
  let val = document.getElementById("result").value;
  if (val.length === 1) {
    val = "0";
  } else if (val[val.length - 1] === " ") {
    val = val.substring(0, val.length - 2);
  } else {
    val = val.substring(0, val.length - 1);
  }
  document.getElementById("result").value = val;
}

function calculate() {}

function checkOperation(enteredValue) {
  let expression =
    document.getElementById("result").value[
      document.getElementById("result").value.length - 1
    ];
  if (expression === enteredValue && isExpression(expression)) {
    return true;
  } else if (expression !== enteredValue && isExpression(enteredValue)) {
    return true;
  } else {
    return false;
  }
}

function isExpression(expression) {
  return (
    expression === "+" ||
    expression === "-" ||
    expression === "x" ||
    expression === "÷"
  );
}

function isNumber(key) {
  return (
    key === "0" ||
    key === "1" ||
    key === "2" ||
    key === "3" ||
    key === "4" ||
    key === "5" ||
    key === "6" ||
    key === "7" ||
    key === "8" ||
    key === "9"
  );
}

let arr = [];
document.addEventListener("keypress", (event) => {
  console.log(event.key);
  if (isNumber(event.key) || isExpression(event.key)) {
    writeToScreen(event.key);
  } else if (event.key === "d") {
    clearLastCharacter();
  } else if (event.key === "c") {
    clearScreen();
  } else if (event.key === "*") {
    writeToScreen("x");
  } else if (event.key === "/") {
    writeToScreen("÷");
  } else if (event.key === ".") {
    writeToScreen(".");
  }
});
