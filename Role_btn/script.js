const roleAct = {
  Admin: [
    "Manage users, configure system settings, and oversee the platform.",
    "Manage users, configure system settings, and oversee the platform.",
  ],
  Debater: [
    "Participates in debates, prepares arguments, and engages in competitive rounds.",
    "Participates in debates, prepares arguments, and engages in competitive rounds.",
  ],
  Adjudicator: [
    "Judges debates, provides feedback, and assigns scores to participants.",
    "Judges debates, provides feedback, and assigns scores to participants.",
  ],
  Organizer: [
    "Schedules events, coordinates teams, and manages logistics.",
    "Schedules events, coordinates teams, and manages logistics.",
  ],
  Guest: [
    "Can view public content and observe events without interaction.",
    "Can view public content and observe events without interaction.",
  ],
};

const btnBox = document.getElementById("btns");
const roles = document.getElementById("roles");

Object.keys(roleAct).map((role) => {
  const button = document.createElement("button");
  button.textContent = role;
  btnBox.appendChild(button);

  button.addEventListener("click", () => {
    roles.innerHTML = `<h2>${role}</h2>`;
  });
});


// ====================================================================================
