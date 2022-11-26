(() => {
  const refs = {
    openModalBtnBuy: document.querySelector('[data-modal-open-buy-now]'),
    openModalBtnBuyMob: document.querySelector('[data-modal-open-buy-now-mob]'),
    closeModalBtnBuy: document.querySelector('[data-modal-close-buy-now]'),
    modalBuy: document.querySelector('[data-modal-buy-now]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtnBuy.addEventListener('click', toggleModalBuy);
  refs.openModalBtnBuyMob.addEventListener('click', toggleModalBuy);
  refs.closeModalBtnBuy.addEventListener('click', toggleModalBuy);

  function toggleModalBuy() {
    refs.modalBuy.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
