function generate() {
  const showPassword = document.getElementById("showPassword");
  const copy = document.getElementById("copy");
  const passwordLength = Number(
    document.getElementById("passwordLength").value
  ); // Convert input to number
  const addLowerChar = document.getElementById("addLowerChar").checked; // Check if selected
  const addUpperChar = document.getElementById("addUpperChar").checked; // Check if selected
  const addNumber = document.getElementById("addNumber").checked; // Check if selected
  const addSymbol = document.getElementById("addSymbol").checked;

  function generatePassword(
    Length,
    addLowerChar,
    addUpperChar,
    addNumber,
    addSymbol
  ) {
    console.log(`Length = ${Length}`);
    console.log(`addLowerChar = ${addLowerChar}`);
    console.log(`addUpperChar = ${addUpperChar}`);
    console.log(`addNumber = ${addNumber}`);
    console.log(`addSymbol = ${addSymbol}`);

    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTVWXYZ";
    const numericalChars = "0123456789";
    const symbolChars = "!@#$%^&*(){}[]-_=+`|?/>.<,:;";

    let selectedChars = "";

    selectedChars += addLowerChar ? lowerChars : "";
    selectedChars += addUpperChar ? upperChars : "";
    selectedChars += addNumber ? numericalChars : "";
    selectedChars += addSymbol ? symbolChars : "";

    console.log(`selectedChars = ${selectedChars}`);
    console.log(`selectedChars.length = ${selectedChars.length}`);

    if (Length < 8 || Length > 15) {
      return "Passwords must be 8-15 characters.";
    }
    if (selectedChars.length === 0) {
      return "Please select at least one character type!";
    }

    let password = "";

    const randomValues = new Uint32Array(Length); // Generate an array
    console.log(`randomValues = ${randomValues}`);
    window.crypto.getRandomValues(randomValues); // Generate secure random numbers
    console.log(`randomValues = ${randomValues}`);

    for (let i = 0; i < Length; i++) {
      const randomIndex = randomValues[i] % selectedChars.length;
      console.log(`${randomIndex} = ${selectedChars[randomIndex]}`);

      password += selectedChars[randomIndex];
    }
    console.log(`PASSWORD = ${password}`);

    return password;
  }

  const password = generatePassword(
    passwordLength,
    addLowerChar,
    addUpperChar,
    addNumber,
    addSymbol
  );

  if (
    password &&
    !(password.includes("Passwords must") || password.includes("Please select"))
  ) {
    showPassword.innerHTML = `${password} <svg
            id="copy"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"
            />
          </svg>`;

    // Add click event to the copy icon
    const copy = document.getElementById("copy");
    copy.addEventListener("click", () => {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          alert("Password copied!");
        })
        .catch((err) => {
          console.error("Error copying password: ", err);
        });
    });
  } else {
    showPassword.innerHTML = `<span class="errMsg"> ${password} </span>`;
  }
}
