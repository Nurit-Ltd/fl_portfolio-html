// Table Action menu

document.addEventListener("DOMContentLoaded", function () {
  const actionMenu = document.createElement("div");
  actionMenu.className = "action-menu";
  actionMenu.style.display = "none";

  actionMenu.innerHTML = `
                    <a class="add-liquidity-button" href="#">Add Liquidity</a>
                    <a class="remove-liquidity-button" href="#">Remove Liquidity</a>
                    <a class="vote-for-fees-button" href="#">Vote for Fees</a>`;

  const actionMenuWrappers = document.querySelectorAll(
    ".lp-action-menu-wrapper"
  );
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
