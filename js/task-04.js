const refs = {
    valueEl: document.querySelector('#value'),
    incrementBtn: document.querySelector('button[data-action="increment"]'),
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
}

const clickFunction = {
    value: 0,
    incMetod() {
        this.value += 1; 
        return refs.valueEl.textContent = this.value;
    },
    decMetod() {
        this.value -= 1; 
        return refs.valueEl.textContent = this.value;
    },
}

refs.incrementBtn.addEventListener('click', clickFunction.incMetod);
refs.decrementBtn.addEventListener('click', clickFunction.decMetod);