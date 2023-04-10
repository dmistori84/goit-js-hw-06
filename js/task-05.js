const input = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
console.log(input);
console.log(nameOutput);

input.addEventListener('input', (event) => {
    const { value } = event.currentTarget;
    if (value !== '') {
        nameOutput.textContent = value
    } else nameOutput.textContent = 'Anonymous';
});