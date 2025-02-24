// Add Liquidity Modal Wallet Dropdown

// document.addEventListener("DOMContentLoaded", () => {
//   const alModalWalletDropdown = document.getElementById(
//     "al-modal-walletDropdown"
//   );
//   const alModalWalletOptions = document.getElementById("modal-options");
//   const alModalArrow = document.getElementById("modal-arrow");
//   const alModalSelectedWalletOption = document.getElementById(
//     "modal-selected-option"
//   );

//   if (alModalWalletDropdown) {
//     alModalWalletDropdown.addEventListener("click", (e) => {
//       e.stopPropagation();
//       alModalWalletOptions.classList.toggle("show");
//       alModalArrow.classList.toggle("open");
//     });

//     alModalWalletOptions.addEventListener("click", (e) => {
//       if (e.target.closest(".modal-option")) {
//         const option = e.target.closest(".modal-option");
//         const checkbox = option.querySelector('input[type="checkbox"]');
//         const checkboxes = alModalWalletOptions.querySelectorAll(
//           'input[type="checkbox"]'
//         );
//         checkboxes.forEach((cb) => {
//           cb.checked = false;
//         });
//         checkbox.checked = true;

//         const selected = option.querySelector(".modal-wallet-name").textContent;
//         alModalSelectedWalletOption.textContent = selected;
//         setTimeout(() => {
//           alModalWalletOptions.classList.remove("show");
//           alModalArrow.classList.remove("open");
//         }, 100);
//       }
//     });

//     document.addEventListener("click", (e) => {
//       if (
//         !alModalWalletDropdown.contains(e.target) &&
//         !alModalWalletOptions.contains(e.target)
//       ) {
//         alModalWalletOptions.classList.remove("show");
//         alModalArrow.classList.remove("open");
//       }
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const addButtons = document.querySelectorAll(".action-add-icon");

  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Wait for modal to be added
      setTimeout(() => {
        const alModalWalletDropdown = document.querySelector(
          ".wallet-name-dropdown_wrapper"
        );
        const alModalWalletOptions = document.getElementById("modal-options");
        const alModalArrow = document.getElementById("modal-arrow");
        const alModalSelectedWalletOption = document.getElementById(
          "modal-selected-option"
        );
        const stepConfirm = document.getElementById("step-confirm");

        if (alModalWalletDropdown) {
          alModalWalletDropdown.addEventListener("click", (e) => {
            e.stopPropagation();

            if (
              stepConfirm &&
              window.getComputedStyle(stepConfirm).display === "none"
            ) {
              return;
            }

            alModalWalletOptions.classList.toggle("show");
            alModalArrow.classList.toggle("open");
          });

          alModalWalletOptions.addEventListener("click", (e) => {
            if (e.target.closest(".modal-option")) {
              const option = e.target.closest(".modal-option");
              const checkbox = option.querySelector('input[type="checkbox"]');
              const checkboxes = alModalWalletOptions.querySelectorAll(
                'input[type="checkbox"]'
              );
              checkboxes.forEach((cb) => {
                cb.checked = false;
              });
              checkbox.checked = true;

              const selected =
                option.querySelector(".modal-wallet-name").textContent;
              alModalSelectedWalletOption.textContent = selected;

              setTimeout(() => {
                alModalWalletOptions.classList.remove("show");
                alModalArrow.classList.remove("open");
              }, 100);
            }
          });

          document.addEventListener("click", (e) => {
            if (
              !alModalWalletDropdown.contains(e.target) &&
              !alModalWalletOptions.contains(e.target)
            ) {
              alModalWalletOptions.classList.remove("show");
              alModalArrow.classList.remove("open");
            }
          });
        }
      }, 300);
    });
  });
});

// Select Token List Modal

document.addEventListener("DOMContentLoaded", () => {
  const tokenListModalOverlay = document.querySelector(
    ".select-token-list-modal-overlay"
  );
  const tokenListModalCloseButton = document.querySelector(
    ".token-list-modal-close-btn"
  );
  const changeTokenButton = document.querySelector(".change-token-btn");
  const tokenListModalContent = document.querySelector(
    ".select-token-list-modal-content"
  ); // Assuming a content wrapper

  const closeTokenListModal = () => {
    tokenListModalOverlay.style.display = "none";
  };

  const openTokenListModal = () => {
    tokenListModalOverlay.style.display = "flex";
  };

  if (tokenListModalOverlay && tokenListModalCloseButton && changeTokenButton) {
    tokenListModalOverlay.addEventListener("click", (event) => {
      if (event.target === tokenListModalOverlay) {
        closeTokenListModal();
      }
    });

    tokenListModalCloseButton.addEventListener("click", (event) => {
      event.stopPropagation();
      closeTokenListModal();
    });

    changeTokenButton.addEventListener("click", openTokenListModal);

    if (tokenListModalContent) {
      tokenListModalContent.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    }
  }
});
