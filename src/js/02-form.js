const form = document.querySelector('.feedback-form');
const myEmail = form.elements.email;
const myTextarea = form.elements.message;
const [localeStorInput, localeStorText] = 'feedback-form-state';

//
myEmail.value = localStorage.getItem(localeStorInput);
myTextarea.value = localStorage.getItem(localeStorText);

// input
form.addEventListener('input', e => {
  if (e.target.nodeName === 'TEXTAREA') {
    localStorage.setItem(localeStorText, e.target.value.trim());
  }
  if (e.target.nodeName === 'INPUT') {
    localStorage.setItem(localeStorInput, e.target.value.trim());
  }
});
// submit

form.addEventListener('submit', event => {
  if (myEmail.value.trim() && myTextarea.value.trim()) {
    event.preventDefault();
    console.log({
      email: myEmail.value.trim(),
      message: myTextarea.value.trim(),
    });
    localStorage.removeItem(localeStorInput);
    localStorage.removeItem(localeStorText);
    form.reset();
  }
});
