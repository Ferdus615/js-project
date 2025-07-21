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
    total.style.color = "red";
  } else {
    total.style.color = "#e5e5e5";
  }

  if (maxChar - charLen <= 80) {
    left.style.color = "red";
  } else {
    left.style.color = "#e5e5e5";
  }
});
