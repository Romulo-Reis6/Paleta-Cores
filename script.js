const bgButtons = document.querySelectorAll('.bg-color')
const fontButtons = document.querySelectorAll('.font-color');

bgButtons.forEach((btn) => {
  btn.addEventListener('click', ({target}) => {
    const color = window.getComputedStyle(target).backgroundColor
    document.querySelector('#text-container').style.backgroundColor = color;
  })
});

fontButtons.forEach((btn) => {
  btn.addEventListener('click', ({target}) => {
    const color = window.getComputedStyle(target).backgroundColor
    const texts = document.querySelectorAll('.text')
    texts.forEach((text) => {
      text.style.color = color;
    })
  })
});