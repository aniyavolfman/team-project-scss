(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-products-open1]"),
    closeModalBtn: document.querySelector("[data-modal-products-close]"),
    modal: document.querySelector("[data-modal-products]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-products-open2]"),
    closeModalBtn: document.querySelector("[data-modal-products-close]"),
    modal: document.querySelector("[data-modal-products]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();


(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-products-open3]"),
    closeModalBtn: document.querySelector("[data-modal-products-close]"),
    modal: document.querySelector("[data-modal-products]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();