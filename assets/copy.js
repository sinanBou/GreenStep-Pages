"use strict";
document.querySelectorAll("button[data-copy]").forEach(button => {
  button.addEventListener("click", async () => {
    const status = button.parentElement.querySelector(".copy-status");
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(button.dataset.copy);
      status.textContent = button.dataset.success;
    } catch {
      status.textContent = button.dataset.failure;
    }
  });
});
