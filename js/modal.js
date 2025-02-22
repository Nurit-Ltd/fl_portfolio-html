document.addEventListener("DOMContentLoaded", function () {
  const addLiquidity = document.getElementById("add-liquidity-modal");
  const actionButtons = document.querySelectorAll(".action-add-icon");

  actionButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      let modalClone = addLiquidity.cloneNode(true);
      modalClone.id = `modal-${index}`;
      document.body.appendChild(modalClone);

      modalClone.style.display = "flex";

      // Handle closing modal
      modalClone
        .querySelector(".close-modal")
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
    });
  });
});
