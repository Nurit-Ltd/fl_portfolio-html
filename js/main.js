function toggleContent(element) {
  const subContent = element.closest(".row-content").nextElementSibling;
  subContent.classList.toggle("visible");

  if (element.textContent.includes("▼")) {
    element.textContent = element.textContent.replace("▼", "▲");
  } else {
    element.textContent = element.textContent.replace("▲", "▼");
  }
}
