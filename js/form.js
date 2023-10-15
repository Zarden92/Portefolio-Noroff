const form = document.getElementById("contact-form");
const nameInput = document.getElementById("uname");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("content");
const sendButton = document.querySelector(".cta_send");

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
subjectInput.addEventListener("input", validateSubject);

function validateName() {
  const nameValue = nameInput.value.trim();
  const error = nameInput.nextElementSibling;
  if (!nameValue.includes(" ")) {
    nameInput.classList.add("invalid");
    error.textContent = "Please enter your firstname and surname.";
    error.style.color = "white";
  } else {
    nameInput.classList.remove("invalid");
    error.textContent = "";
  }
}

function validateEmail() {
  const emailValue = emailInput.value.trim();
  const error = emailInput.nextElementSibling;
  if (!emailValue.includes("@")) {
    emailInput.classList.add("invalid");
    error.textContent =
      "Please enter a valid email address. (example@domain.com)";
    error.style.color = "white";
  } else {
    emailInput.classList.remove("invalid");
    error.textContent = "";
  }
}

function validateSubject() {
  const subjectValue = subjectInput.value.trim();
  const error = subjectInput.nextElementSibling;
  if (subjectValue.length < 10) {
    subjectInput.classList.add("invalid");
    error.textContent = "Subject must be at least 10 characters long.";
    error.style.color = "white";
  } else {
    subjectInput.classList.remove("invalid");
    error.textContent = "";
  }
}

sendButton.addEventListener("click", () => {
  validateName();
  validateEmail();
  validateSubject();

  if (
    !nameInput.classList.contains("invalid") &&
    !emailInput.classList.contains("invalid") &&
    !subjectInput.classList.contains("invalid")
  ) {
    form.submit();
    form.reset();
  }
});
