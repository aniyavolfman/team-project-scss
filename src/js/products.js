(() => {
  const refs = {
    openModalBtn1: document.querySelector('[data-modal-products-open1]'),
    openModalBtn2: document.querySelector('[data-modal-products-open2]'),
    openModalBtn3: document.querySelector('[data-modal-products-open3]'),
    closeModalBtn: document.querySelector('[data-modal-products-close]'),
    modalBackdrop: document.querySelector('[data-modal-products]'),
    submitButton: document.querySelector('.products-modal-form__button'),
  };
  
  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.openModalBtn3.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modalBackdrop.addEventListener('click', onEscPress);
  refs.submitButton.addEventListener('click', onButtonSubmit);

  function toggleModal() {
    refs.modalBackdrop.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
    window.addEventListener('keydown', onEscPress);
  }

  function onEscPress(event) {
    if (event.code === 'Escape') {
      refs.modalBackdrop.classList.toggle('is-hidden');
      window.removeEventListener('keydown', onEscPress);
      document.body.classList.toggle('no-scroll');
    }

    if (event.target === event.currentTarget) {
      refs.modalBackdrop.classList.toggle('is-hidden');
      document.body.classList.toggle('no-scroll');
    }
  }

  function onButtonSubmit(event) {
    event.preventDefault();
    refs.modalBackdrop.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
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
