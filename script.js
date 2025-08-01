const form = document.getElementById("feedback-form");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message || !validateEmail(email)) {
    alert("Please fill out all fields correctly.");
    return;
  }

  // Optional: Save to localStorage or simulate send
  console.log("Message Sent:", { name, email, message });

  confirmation.classList.remove("hidden");
  form.reset();
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
