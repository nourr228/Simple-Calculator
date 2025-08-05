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
