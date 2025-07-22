const input = document.getElementById("textInput");
const TotalChar = document.getElementById("countUp");
const RemainingChar = document.getElementById("countDown");
const upLimit = document.getElementById("upLimit");
const downLimit = document.getElementById("downLimit");
const maxChar = input.getAttribute("maxlength");

const total = document.getElementById("total");
const left = document.getElementById("left");

TotalChar.textContent = 0;
RemainingChar.textContent = maxChar;
upLimit.textContent = maxChar;
downLimit.textContent = maxChar;

input.addEventListener("input", () => {
  const charLen = input.value.length;
  TotalChar.textContent = charLen;
  RemainingChar.textContent = maxChar - charLen;

  if (charLen > 1350) {
    total.style.color = "#ff637e";
  } else {
    total.style.color = "#00bcff";
  }

  if (maxChar - charLen < 150) {
    left.style.color = "#ff637e";
  } else {
    left.style.color = "#00bcff";
  }
});
