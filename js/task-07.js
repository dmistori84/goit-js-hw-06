const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

inputEl.addEventListener('input', () => {
    textEl.style.fontSize = `${Number(inputEl.value)}px`;
});

