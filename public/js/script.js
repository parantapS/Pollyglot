const form = document.getElementById("chatForm");
const input = document.getElementById("userInput");
const messages = document.getElementById("chatMessages");
const languageButtons = document.querySelectorAll(".lang-btn");

let selectedLanguage = "es"; // default Spanish

languageButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active from all
    languageButtons.forEach(b => b.classList.remove("active"));

    // Activate clicked
    btn.classList.add("active");

    // Store selected language
    selectedLanguage = btn.dataset.lang;
  });
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  // User message (BLUE)
  addMessage(text, "user");
  input.value = "";

  // Bot placeholder (GRAY)
  const botPlaceholder = addMessage("Processing..", "bot");

  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: text, language: selectedLanguage })
      
    });

    const data = await response.json();

    botPlaceholder.textContent = data.reply || "No response from server.";
  } catch (error) {
    botPlaceholder.textContent = "Something went wrong.";
  }

  messages.scrollTop = messages.scrollHeight;
});

function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;
  messageDiv.textContent = text;
  messages.appendChild(messageDiv);
  return messageDiv;
}
