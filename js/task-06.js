const inputEl = document.getElementById('validation-input');
console.log(inputEl);

inputEl.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length == inputEl.dataset.length) {
        inputEl.classList = 'valid'        
    } else inputEl.classList = 'invalid';    
});
