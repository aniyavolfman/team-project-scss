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


// Contact popup 

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-popup-location-open]'),
    closeModalBtn: document.querySelector('[data-popup-location-close]'),
    modal: document.querySelector('[data-popup-location]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('visually-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-popup-francise-open]'),
    closeModalBtn: document.querySelector('[data-popup-francise-close]'),
    modal: document.querySelector('[data-popup-francise]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('visually-hidden');
  }
})();