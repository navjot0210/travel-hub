'use strict';

const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');

openModal.addEventListener('click', () => {
  modal.showModal();
});