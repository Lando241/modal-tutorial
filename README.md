# modal-tutorial

Modal Tutorial from Udemy Course

The Complete JavaScript Course 2023: From Zero to Expert! by Jonas Schmedtmann

Using JS to open and close a modal window.
Learning how to store elements as variables in JS. Doing so will help to avoid having to select various elements over and over.

Examples from tutorial:

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

Learning how to create functions to help avoid duplicating code

- Function to open modal windows as well as closing them.
- Doing so helped to eliminate duplicating close in multiple places.

Learning how to work with CSS classes

- Adding and removing classes to activate and decactive the CSS code (showing and closing the modal window)
- Classes can also be checked using JS to determine if they contain a specific class
- Tutorial example is using boolean logic to determine if the modal does not contain the 'hidden' element, if it does not then the keystroke on ESC is used to close the modal window.
  - document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
    }
    });
