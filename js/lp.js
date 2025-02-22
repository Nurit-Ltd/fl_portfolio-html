// Table Action menu

document.addEventListener("DOMContentLoaded", () => {
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

    wrapper.addEventListener("click", (event) => {
      // Close any other open menus
      actionMenuWrappers.forEach((otherWrapper) => {
        if (otherWrapper !== wrapper) {
          const otherMenu = otherWrapper.querySelector(".action-menu");
          otherMenu.style.display = "none";
        }
      });

      // Close dropdowns
      closeAllDropdowns();

      const menu = wrapper.querySelector(".action-menu");
      menu.style.display = menu.style.display === "block" ? "none" : "block";
      event.stopPropagation(); // Prevents immediate closing when clicking the button
    });
  });

  // Close the menu when clicking outside
  document.addEventListener("click", (event) => {
    actionMenuWrappers.forEach((wrapper) => {
      const menu = wrapper.querySelector(".action-menu");
      if (!wrapper.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = "none";
      }
    });
  });
});

// Table row count

const countTableRowsWithoutTH = (tableId) => {
  const table = document.getElementById(tableId);
  if (!table) return 0;

  const bodyRows =
    table.querySelector("tbody")?.getElementsByTagName("tr") || [];
  let count = 0;

  for (let row of bodyRows) {
    if (!row.querySelector("th")) {
      count++;
    }
  }

  return count;
};

const displayRowCount = () => {
  const count = countTableRowsWithoutTH("my-pools-table");
  const rowCountElement = document.getElementById("rowCount");
  rowCountElement.textContent = `${count}`;
};

window.onload = displayRowCount;

// Customize Dropdown

const customizeDropdown = document.getElementById("customizeDropdown");
const customizeOptions = document.getElementById("customize-options");
const customizeArrow = document.getElementById("customize-arrow");
const selectedCustomizeOption = document.getElementById(
  "selected-customize-option"
);

customizeDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = customizeOptions.classList.contains("show");
  closeAllDropdowns();
  closeAllActionMenus();
  if (!isOpen) {
    customizeOptions.classList.toggle("show");
    customizeArrow.classList.toggle("open");
  }
});

document.addEventListener("click", () => {
  closeAllDropdowns();
});

// Wallet dropdown

const walletDropdown = document.getElementById("walletDropdown");
const walletOptions = document.getElementById("options");
const arrow = document.getElementById("arrow");
const selectedWalletOption = document.getElementById("selected-option");

walletDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = walletOptions.classList.contains("show");
  closeAllDropdowns();
  closeAllActionMenus();
  if (!isOpen) {
    walletOptions.classList.toggle("show");
    arrow.classList.toggle("open");
  }
});

walletOptions.addEventListener("click", (e) => {
  if (e.target.type === "checkbox") {
    const checkboxes = walletOptions.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    e.target.checked = true;

    const selected = e.target
      .closest(".option")
      .querySelector(".wallet-name").textContent;
    selectedWalletOption.textContent = selected;
  }
});

const closeAllDropdowns = () => {
  customizeOptions.classList.remove("show");
  customizeArrow.classList.remove("open");
  walletOptions.classList.remove("show");
  arrow.classList.remove("open");
};

const closeAllActionMenus = () => {
  const actionMenuWrappers = document.querySelectorAll(
    ".lp-action-menu-wrapper"
  );
  actionMenuWrappers.forEach((wrapper) => {
    const menu = wrapper.querySelector(".action-menu");
    menu.style.display = "none";
  });
};
