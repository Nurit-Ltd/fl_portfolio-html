// Table Multiple wallet Open Close

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

// NavBar

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".berger-button");
  const sidebarMenu = document.getElementById("sidebarMenu");
  const closeMenu = document.getElementById("closeMenu");
  const overlay = document.getElementById("sidebarOverlay");

  // Function to open menu
  function openMenu() {
    sidebarMenu.classList.add("active");
    overlay.classList.add("active");
  }

  // Function to close menu
  function closeSidebar() {
    sidebarMenu.classList.remove("active");
    overlay.classList.remove("active");
  }

  // Event Listeners
  menuButton.addEventListener("click", openMenu);
  closeMenu.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);
});

// NavBar

// Wallet Select arrow icon
document.querySelectorAll(".wallet-select").forEach((walletContainer) => {
  const walletSelect = walletContainer.querySelector(".wallet-options");

  walletSelect.addEventListener("click", (event) => {
    // Toggle the "open" class on click
    walletContainer.classList.toggle("open");
    event.stopPropagation(); // Prevent the document click event from triggering immediately
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (!walletContainer.contains(event.target)) {
      walletContainer.classList.remove("open");
    }
  });
});

// Table Action menu

document.addEventListener("DOMContentLoaded", function () {
  const actionMenu = document.createElement("div");
  actionMenu.className = "action-menu";
  actionMenu.style.display = "none";

  actionMenu.innerHTML = `
                  <a class="tx-history-button" href="#">Tx History</a>
                  <a class="share-button" href="#">Share</a>
                  <a class="hide-button" href="#">Hide</a>
                  <a class="burn-button" href="#">Burn</a>`;

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

// Modals

// Trade Modal

let currentMode = "buy";
const tradeModalOverlay = document.getElementById("tradeModalOverlay");
const buyButton = document.getElementById("buyButton");
const sellButton = document.getElementById("sellButton");
const amountInput = document.getElementById("amountInput");
const quickActionButton = document.getElementById("quickActionButton");

document.querySelectorAll(".trade-button").forEach((tradeButton) => {
  tradeButton.addEventListener("click", openModal);
});

function closeModal() {
  tradeModalOverlay.classList.remove("active");
}

function setMode(mode) {
  currentMode = mode;
  if (mode === "buy") {
    buyButton.classList.remove("button-inactive");
    buyButton.classList.add("buy-active");
    sellButton.classList.remove("sell-active");
    sellButton.classList.add("button-inactive");
    quickActionButton.classList.remove("sell-active");
    quickActionButton.classList.add("buy-active");
    quickActionButton.textContent = "QUICK BUY";
    amountInput.placeholder = "Amount to Buy (XRP)";
  } else {
    sellButton.classList.remove("button-inactive");
    sellButton.classList.add("sell-active");
    buyButton.classList.remove("buy-active");
    buyButton.classList.add("button-inactive");
    quickActionButton.classList.remove("buy-active");
    quickActionButton.classList.add("sell-active");
    quickActionButton.textContent = "QUICK SELL";
    amountInput.placeholder = "Amount to Sell (XRP)";
  }
}

function setAmount(xrp) {
  amountInput.value = xrp;
}

document.querySelectorAll(".advanced-settings").forEach((button) => {
  button.addEventListener("click", () => {
    const contentWrapper = button.nextElementSibling;
    const arrow = button.querySelector(".advanced-settings-arrow");

    contentWrapper.style.display =
      contentWrapper.style.display === "block" ? "none" : "block";
    arrow.style.transform =
      arrow.style.transform === "rotate(180deg)"
        ? "rotate(0deg)"
        : "rotate(180deg)";
  });
});

// Ensure advanced settings are closed each time the modal is opened
function closeAdvancedSettings() {
  document.querySelectorAll(".advanced-settings").forEach((button) => {
    const contentWrapper = button.nextElementSibling;
    const arrow = button.querySelector(".advanced-settings-arrow");

    contentWrapper.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
  });
}

// Call closeAdvancedSettings when opening the modal
function openModal() {
  tradeModalOverlay.classList.add("active");
  closeAdvancedSettings();
}

// Close modal when clicking outside
if (tradeModalOverlay) {
  tradeModalOverlay.addEventListener("click", function (event) {
    if (!event.target.closest(".trade-modal")) {
      closeModal();
    }
  });
}

// Trade Modal

// Share Modal

const modal = document.getElementById("modal-share");

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".share-button").forEach((shareButton) => {
    shareButton.addEventListener("click", () => {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Close share modal when clicking the close button
document.querySelectorAll(".close-share-modal").forEach((closeModalBtn) => {
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });
});

// Share Modal

// History Modal

const historyModal = document.querySelector(".history-modal-overlay");

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tx-history-button").forEach((openModalButton) => {
    openModalButton.addEventListener("click", () => {
      historyModal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });
});

document.querySelectorAll(".close-button").forEach((closeModalBtn) => {
  closeModalBtn.addEventListener("click", () => {
    historyModal.style.display = "none";
    document.body.style.overflow = "auto";
  });
});

window.addEventListener("click", (e) => {
  if (e.target === historyModal) {
    historyModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// History Modal

// Modals

// Portfolio Tab Section

const portfolioTabsWrapper = document.querySelector(".portfolio-tabs-wrapper");
const portfolioTabs = [...portfolioTabsWrapper.children];
const portfolioTabContentsWrapper = document.querySelector(
  ".portfolio-tab-contents-wrapper"
);
const portfolioTabContents = [...portfolioTabContentsWrapper.children];

const setActiveTab = (index) => {
  portfolioTabs.forEach((tab, i) => {
    tab.classList.toggle("active", i === index);
    portfolioTabContents[i].classList.toggle("active", i === index);
  });
};

portfolioTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => setActiveTab(index));
});

setActiveTab(0); // Activate the first tab by default
