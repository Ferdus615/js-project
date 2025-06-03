let count = 0;

const increment = () => {
  count += 1;
  document.getElementById("counter").innerText = count;
};

const decrement = () => {
  if (count > 0) {
    count -= 1;
    document.getElementById("counter").innerText = count;
  }
};

const save = () => {
  const savedCounts = document.getElementById("savedCounts");
  const newCounts = document.createElement("li");
  newCounts.innerText = count;
  savedCounts.appendChild(newCounts);
};

const reset = () => {
  count = 0;
  document.getElementById("counter").innerText = count;
};
