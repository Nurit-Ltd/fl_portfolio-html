document.addEventListener("DOMContentLoaded", function () {
  const addLiquidity = document.getElementById("add-liquidity-modal");
  const actionButtons = document.querySelectorAll(".action-add-icon");

  actionButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      let modalClone = addLiquidity.cloneNode(true);
      modalClone.id = `modal-${index}`;
      document.body.appendChild(modalClone);
      modalClone.style.display = "flex";

      // Hide steps initially
      modalClone.querySelector("#step-confirm").style.display = "none";
      modalClone.querySelector("#step-confirm-single-sided").style.display =
        "none";
      modalClone.querySelector("#step-vote-done-numeric").style.display =
        "none";
      modalClone.querySelector("#step-done-single-sided").style.display =
        "none";
      modalClone.querySelector("#step-voting").style.display = "none";
      modalClone.querySelector("#step-complete").style.display = "none";

      // Remove loading class and hide the loading icon
      modalClone.querySelector(".loading-icon").style.display = "none";
      modalClone.querySelector(".loading-icon-vote").style.display = "none";
      modalClone.querySelector(".loading-icon-voting").style.display = "none";
      modalClone.querySelector(".loading-icon-single-sided").style.display =
        "none";

      // Handle closing modal
      modalClone
        .querySelector(".close-modal")
        .addEventListener("click", function () {
          modalClone.remove();
        });
      modalClone
        .querySelector("#step-numeric-done")
        .addEventListener("click", function () {
          modalClone.remove();
        });
      modalClone
        .querySelector("#step-done-single-sided-btn")
        .addEventListener("click", function () {
          modalClone.remove();
        });

      // Handle tab switching
      const tabButtons = modalClone.querySelectorAll(".tab-btn");
      const tabContents = modalClone.querySelectorAll(".tab-content");

      tabButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
          tabButtons.forEach((tab) => tab.classList.remove("active"));
          tabContents.forEach((content) => content.classList.remove("active"));

          this.classList.add("active");
          modalClone
            .querySelector(`#${this.dataset.tab}`)
            .classList.add("active");
        });
      });

      // Handle Review button clicks
      modalClone.querySelectorAll(".review").forEach((btn) => {
        btn.addEventListener("click", function () {
          modalClone.querySelector("#step-review").style.display = "none";
          modalClone.querySelector("#step-confirm").style.display = "block";
        });
      });

      modalClone.querySelectorAll(".review-single-sided").forEach((btn) => {
        btn.addEventListener("click", function () {
          modalClone.querySelector("#step-review").style.display = "none";
          modalClone.querySelector("#step-confirm").style.display = "none";
          modalClone.querySelector("#step-confirm-single-sided").style.display =
            "block";
        });
      });

      // Handle Cancel button clicks
      modalClone.querySelectorAll("#step-cancel").forEach((btn) => {
        btn.addEventListener("click", function () {
          modalClone.remove();
        });
      });

      // ✅ Handle confirm loading (apply loading class to all buttons individually)
      const buttonsToLoad = modalClone.querySelectorAll(
        "#numeric-confirm, #single-sided-confirm, .cancel-btn, .close-modal"
      );

      buttonsToLoad.forEach((btn) => {
        btn.addEventListener("click", function () {
          // Show loading state
          modalClone.querySelector(".loading-icon").style.display = "block";
          modalClone.querySelector(".loading-icon-single-sided").style.display =
            "block";

          // Add loading class to the button clicked
          buttonsToLoad.forEach((button) => button.classList.add("is-loading"));

          // Simulate loading for 2 seconds
          setTimeout(() => {
            // Remove the loading class after 2 seconds
            buttonsToLoad.forEach((button) =>
              button.classList.remove("is-loading")
            );

            // Hide the loading icon
            modalClone.querySelector(".loading-icon").style.display = "none";
            modalClone.querySelector(
              ".loading-icon-single-sided"
            ).style.display = "none";

            // Transition to next step based on which button was clicked
            if (btn.id === "numeric-confirm") {
              modalClone.querySelector("#step-confirm").style.display = "none";
              modalClone.querySelector(
                "#step-vote-done-numeric"
              ).style.display = "block";
            } else if (btn.id === "single-sided-confirm") {
              modalClone.querySelector(
                "#step-confirm-single-sided"
              ).style.display = "none";
              modalClone.querySelector(
                "#step-done-single-sided"
              ).style.display = "block";
            }
          }, 2000); // 2 seconds delay
        });
      });

      // handle voting button clicks

      const buttonsToVote = modalClone.querySelectorAll(
        "#numeric-vote, #step-numeric-done, .close-modal, #numeric-voting"
      );

      buttonsToVote.forEach((btn) => {
        btn.addEventListener("click", function () {
          // Show loading state
          modalClone.querySelector(".loading-icon-vote").style.display =
            "block";
          modalClone.querySelector(".loading-icon-voting").style.display =
            "block";

          // Add loading class to the button clicked
          buttonsToVote.forEach((button) => button.classList.add("is-loading"));

          // Simulate loading for 2 seconds
          setTimeout(() => {
            // Remove the loading class after 2 seconds
            buttonsToVote.forEach((button) =>
              button.classList.remove("is-loading")
            );

            // Hide the loading icon
            modalClone.querySelector(".loading-icon-vote").style.display =
              "none";
            modalClone.querySelector(".loading-icon-voting").style.display =
              "none";

            // Transition to next step based on which button was clicked
            if (btn.id === "numeric-vote") {
              modalClone.querySelector(
                "#step-vote-done-numeric"
              ).style.display = "none";
              modalClone.querySelector("#step-voting").style.display = "block";
            } else if (btn.id === "numeric-voting") {
              modalClone.querySelector("#step-voting").style.display = "none";
              modalClone.querySelector("#step-complete").style.display =
                "block";
            } else if (btn.id === "done-btn") {
              modalClone.remove();
            }
          }, 2000); // 2 seconds delay
        });
      });

      modalClone.querySelectorAll("#step-complete-done").forEach((btn) => {
        btn.addEventListener("click", function () {
          modalClone.remove();
        });
      });
    });
  });
});
