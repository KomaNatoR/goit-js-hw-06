function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector('input'),
  BtnCreate: document.querySelector('[data-create]'),
  BtnDestroy: document.querySelector('[data-destroy]'),
  zoneOfDivs: document.querySelector('#boxes'),
};
// console.dir(refs.zoneOfDivs);

refs.BtnCreate.addEventListener('click', createBoxes);
refs.BtnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(e) {
  const amount = refs.inputEl.value;
  const element = [];
  
  for (let i = 0; i < amount; i += 1) {

    element.push(`<div style="width:calc(30px + (10px * ${i})); height:calc(30px + (10px * ${i})); background:${getRandomHexColor()};"></div>`);
    
  }
  // console.log(element.join(''));
  refs.zoneOfDivs.insertAdjacentHTML('afterbegin', element.join(''));
};

function destroyBoxes(e) {
  refs.zoneOfDivs.innerHTML = '';
}