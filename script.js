// Default language: Norwegian
let currentLang = localStorage.getItem("lang") || "no";

// Apply language to all elements with data-no / data-en
function applyLanguage() {
  document.querySelectorAll("[data-no]").forEach(element => {
    const text = element.dataset[currentLang];
    if (text) {
      element.textContent = text;
    }
  });

  // Update flag icon if it exists
  const flag = document.getElementById("lang-flag");
  if (flag) {
    flag.textContent = currentLang === "no" ? "🇳🇴" : "🇬🇧";
  }
}

// Toggle language when clicking the flag
function toggleLanguage() {
  currentLang = currentLang === "no" ? "en" : "no";
  localStorage.setItem("lang", currentLang);
  applyLanguage();
}

// Run on page load
document.addEventListener("DOMContentLoaded", applyLanguage);
