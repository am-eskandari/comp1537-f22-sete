function addHandler() {
  // console.log("addHandler");
  x = $("#firstOperand").val();
  y = $("#secondOperand").val();
  x = Number(x)
  y = Number(y)
  result = `${x} + ${y} = ${x + y}`;
  coloredResult = `
  <span style="background-color:azure">
  ${result}
  <button class="deleteBtn">Delete</button>
  </span>
  <br>
  `
  $("#result").append(coloredResult);
}


function subHandler() {
  // console.log("addHandler");
  x = $("#firstOperand").val();
  y = $("#secondOperand").val();
  x = Number(x)
  y = Number(y)
  result = `${x} - ${y} = ${x - y}`;
  coloredResult = `<span style="background-color:wheat">
    ${result}
    <button class="deleteBtn">Delete</button>
    </span>
    <br>
    `

  result = `${x} - ${y} = ${x - y}`;
  $("#result").append(coloredResult);
}

function mulHandler() {
  // console.log("addHandler");
  x = $("#firstOperand").val();
  y = $("#secondOperand").val();
  x = Number(x)
  y = Number(y)
  result = `${x} * ${y} = ${x * y}`;
  coloredResult = `
  <span style="background-color:lime">
  ${result}
  <button class="deleteBtn">Delete</button>
  </span>
  <br>
  `
  $("#result").append(coloredResult);
}

function divHandler() {
  // console.log("addHandler");
  x = $("#firstOperand").val();
  y = $("#secondOperand").val();
  x = Number(x)
  y = Number(y)
  result = `${x} / ${y} = ${x / y}`;
  coloredResult = `
  <span style="background-color:violet">
  ${result}
  <button class="deleteBtn">Delete</button>
  </span>
  <br>
  `
  $("#result").append(coloredResult);
}

function deleteHandler() {
  console.log("deleteHandler");
  $(this).parent().hide();
}

function setup() {
  // console.log("setup");
  $("#addBtn").click(addHandler);
  $("#subBtn").click(subHandler);
  $("#mulBtn").click(mulHandler);
  $("#divBtn").click(divHandler);
  $("body").on("click", ".deleteBtn", deleteHandler);
}


$(document).ready(setup);