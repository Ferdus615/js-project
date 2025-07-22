const input = document.getElementById("textInput");
const TotalChar = document.getElementById("countUp");
const RemainingChar = document.getElementById("countDown");
const maxChar = input.getAttribute("maxlength");

const total = document.getElementById("total");
const left = document.getElementById("left");

input.addEventListener("input", () => {
  const charLen = input.value.length;
  TotalChar.textContent = charLen;
  RemainingChar.textContent = maxChar - charLen;

  if (charLen >= 420) {
    total.style.color = "#ff637e";
  } else {
    total.style.color = "#00bcff";
  }

  if (maxChar - charLen <= 80) {
    left.style.color = "#ff637e";
  } else {
    left.style.color = "#00bcff";
  }
});
