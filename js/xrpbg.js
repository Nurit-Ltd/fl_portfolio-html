document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".wallet-input");
  const xrpContainers = document.querySelectorAll(".xrp");

  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      xrpContainers.forEach((xrp) => xrp.classList.remove("active")); 
      this.closest(".xrp").classList.add("active"); 
    });

    input.addEventListener("blur", function () {
      setTimeout(() => {
        if (!document.querySelector(".wallet-input:focus")) {
          xrpContainers.forEach((xrp) => xrp.classList.remove("active")); 
        }
      }, 50); 
    });
  });
});
