let multiWallet = document.getElementsByClassName("multi-wallet");
function toggleContent(element) {
  const subContent = element.closest(".row-content").nextElementSibling;
  subContent.classList.toggle("visible");

  const icon = element.querySelector(".down-arrow-icon");
  icon.classList.toggle("rotated");
}
Array.from(multiWallet).forEach((wallet) => {
  wallet.addEventListener("click", function () {
    toggleContent(this);
  });
});

// Action menu

document.addEventListener("DOMContentLoaded", function () {
  const actionMenu = document.createElement("div");
  actionMenu.className = "action-menu";
  actionMenu.style.display = "none";

  actionMenu.innerHTML = `
                  <a href="#">Tx History</a>
                  <a href="#">Share</a>
                  <a href="#">Hide</a>
                  <a href="#">Burn</a>`;

  const actionMenuWrappers = document.querySelectorAll(".action-menu-wrapper");
  actionMenuWrappers.forEach((wrapper) => {
    wrapper.appendChild(actionMenu.cloneNode(true));

    wrapper.addEventListener("click", function (event) {
      // Close any other open menus
      actionMenuWrappers.forEach((otherWrapper) => {
        if (otherWrapper !== wrapper) {
          const otherMenu = otherWrapper.querySelector(".action-menu");
          otherMenu.style.display = "none";
        }
      });

      const menu = this.querySelector(".action-menu");
      menu.style.display = menu.style.display === "block" ? "none" : "block";
      event.stopPropagation(); // Prevents immediate closing when clicking the button
    });
  });

  // Close the menu when clicking outside
  document.addEventListener("click", function (event) {
    actionMenuWrappers.forEach((wrapper) => {
      const menu = wrapper.querySelector(".action-menu");
      if (!wrapper.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = "none";
      }
    });
  });
});
