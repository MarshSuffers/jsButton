//declare variables
let button = document.getElementById("clicks");
let clickNum = 0;

//button pressed

redButton.addEventListener("click", btnPressed);
function btnPressed() {
  ++clickNum;
  button.innerText = clickNum;
}
