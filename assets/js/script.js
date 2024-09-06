document.getElementById('add-button').addEventListener('click', function () {
    const input = document.getElementById('item-input');
    const listContainer = document.getElementById('list-container');
    const listItem = document.createElement('li');

    if (input.value.trim() !== '') {
        listItem.innerHTML = `${input.value} <button class="delete is-small"> </button>`;
        listContainer.appendChild(listItem);
        input.value = '';

    }
});

// Modal JS Functionality Implementation Below:

// Clicking the 'x' button in the top right: 
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.modal');
    const modalButton = document.querySelector('.button');
    const closeButton = modal.querySelector('.delete');

    // Fx to open the modal
    function openModal() {
        modal.classList.add('is-active');
    }

    // Fx to close the modal
    function closeModal() {
        modal.classList.remove('is-active');
    }

    // Event listener for the button to open the modal
    modalButton.addEventListener('click', closeModal);

    // Event listener for the close button within the modal
    closeButton.addEventListener('click', closeModal);
});



// Clicking the 'Let's Get Started!' button:
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.modal');
    const modalButton = document.querySelector('.button');
    const closeButton = modal.querySelector('.delete');
    const startButton = modal.querySelector('.modal-card-foot .button');

    // Fx to open the modal
    function openModal() {
        modal.classList.add('is-active');
    }

    // Fx to close the modal
    function closeModal() {
        modal.classList.remove('is-active');
    }

    // Event listener for the button to open the modal
    modalButton.addEventListener('click', openModal);

    // Event listener for the close button within the modal
    closeButton.addEventListener('click', closeModal);

    // Event listener for the "Let's Get Started!" button to close the modal
    startButton.addEventListener('click', closeModal);
});
