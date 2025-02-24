const feeRange = document.getElementById("feeRange");
const feeValue = document.getElementById("feeValue");

feeRange.addEventListener("input", () => {
    feeValue.textContent = feeRange.value;
});


// tooltip

document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".info-icon");

    icons.forEach((icon) => {
        const tooltipText = icon.getAttribute("data-tooltip");
        if (!tooltipText) return;

        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.textContent = tooltipText;
        icon.parentElement.appendChild(tooltip);

        icon.addEventListener("mouseenter", function () {
            tooltip.style.visibility = "visible";
            tooltip.style.opacity = "1";
        });

        icon.addEventListener("mouseleave", function () {
            tooltip.style.visibility = "hidden";
            tooltip.style.opacity = "0";
        });
    });
});
