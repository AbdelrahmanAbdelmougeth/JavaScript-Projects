const modal_btn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const close_btn = document.querySelector(".close-btn");

modal_btn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
close_btn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
