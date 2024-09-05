document.getElementById('add-button').addEventListener('click', function() {
    const input = document.getElementById('item-input');
    const listContainer = document.getElementById('list-container');
    const listItem = document.createElement('li');

    if (input.value.trim() !== '') {
        listItem.innerHTML = `${input.value} <button class="delete is-small"> </button>`;
        listContainer.appendChild(listItem);
        input.value = ''; 

    }
});
