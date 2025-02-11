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

function openModal() {
  tradeModalOverlay.classList.add("active");
}

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

// Close modal when clicking outside
tradeModalOverlay.addEventListener("click", (e) => {
  if (e.target === tradeModalOverlay) {
    closeModal();
  }
});

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

const closeModalBtn = document.querySelector(".close-btn");

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Share Modal

// Modals
