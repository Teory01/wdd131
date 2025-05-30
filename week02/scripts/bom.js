const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li'); 
const deleteButton = document.createElement('button');



button.addEventListener('click', function () {
    if (input.value.trim() === '') {
        alert('Input cannot be blank');
        input.focus();
    } else {
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', 'Delete chapter');

        li.append(deleteButton);
        list.append(li);
        input.focus();
        input.value = ' ';
     }
});

deleteButton.addEventListener('click', function () { 
    list.removeChild(li);
    input.focus();
    input.value = ' ';
});