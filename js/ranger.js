const feeRange = document.getElementById("feeRange");
const feeValue = document.getElementById("feeValue");

feeRange.addEventListener("input", () => {
    feeValue.textContent = feeRange.value;
});