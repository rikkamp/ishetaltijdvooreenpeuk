const button = document.getElementsByClassName('time__button')[0];
const peukText = document.getElementsByClassName('peuktijd')[0];
const audio = new Audio('peuk.mp3');

const toggleText = (toggle) => {
  if (toggle) {
    peukText.innerHTML = 'JA! het is tijd voor een peuk';
    peukText.classList.remove('warning');
  } else {
    peukText.innerHTML = 'Miscchien is het wijs om nog heel even te wachten';
    peukText.classList.add('warning');
  }
};

button.addEventListener('click', () => {
  const time = document.getElementsByClassName('time')[0].value;
  let currentDate = new Date();
  const finalNumber = Number.parseInt(time);
  let newDate = new Date(currentDate.getTime() + finalNumber * 60000);
  let diffrence2 = Date.parse(newDate) - Date.parse(new Date());
  document.cookie = newDate;
  toggleText(false);
  setTimeout(() => (toggleText(true), audio.play()), diffrence2);
});

if (document.cookie.length > 0) {
  let setDate = document.cookie;
  const diffrence = Date.parse(setDate) - Date.parse(new Date());

  if (diffrence <= 0) {
    toggleText(true);
  } else {
    toggleText(false);
    setTimeout(() => (toggleText(true), audio.play()), diffrence);
  }
}
