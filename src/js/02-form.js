const form = document.querySelector('.feedback-form');
const keyLocalStor = 'feedback-form-state';
let userData = {
  email: form.elements.email.value,
  message: form.elements.message.value,
};
const newObj = JSON.parse(localStorage.getItem(keyLocalStor));
if (newObj) {
  userData.email = newObj.email;
  userData.message = newObj.message;
  form.elements.email.value = newObj.email;
  form.elements.message.value = newObj.message;
}
// input
form.addEventListener('input', e => {
  if (e.target.nodeName === 'INPUT') {
    userData.email = e.target.value.trim();
  }
  if (e.target.nodeName === 'TEXTAREA') {
    userData.message = e.target.value.trim();
  }
  localStorage.setItem(keyLocalStor, JSON.stringify(userData));
});

form.addEventListener('submit', event => {
  if (userData.email !== '' && userData.message !== '') {
    event.preventDefault();
    console.log(userData);
    localStorage.removeItem(keyLocalStor);
    form.reset();
  }
});
