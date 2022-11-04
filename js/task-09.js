function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  spanEl: document.querySelector('.color'),
  spanBtn: document.querySelector('.change-color'),
}; 

refs.spanBtn.addEventListener('click', onBntChangeColor);
// refs.bodyEl.addEventListener('click', onBodyChangeColor);

function onBntChangeColor(e) {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.spanBtn.textContent = getRandomHexColor();
  // console.log(getRandomHexColor());
}
// function onBodyChangeColor(e) {
//   e.currentTarget.style.backgroundColor = getRandomHexColor();
// }

// console.log(refs.bodyEl);