'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Function to open modal window
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Function created to close modal window
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Opening and closing modal window
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Creating event listener for ESC key to close modal window if open
// Check CSS property to determine if the hidden element is not there.
document.addEventListener('keydown', function (event) {
  // 'If the event key is esc and if the modal doesn't contain hidden class, execute function
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
