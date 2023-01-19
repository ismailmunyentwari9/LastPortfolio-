const popNotfication = document.getElementById('error');
const formPaper = document.getElementById('.fillPaper');
const targetedInput = document.getElementById('Emails');

const validateTheEmail = (input) => {
  if (input === input.toLowerCase()) {
    return true;
  }
  return false;
};
formPaper.addEventListener('submit', (e) => {
  popNotfication.innerHTML = '';
  if (validateTheEmail(targetedInput.value)) {
    popNotfication.innerHTML = '';
  } else {
    e.preventDefault();
    popNotfication.innerHTML = 'Please Dear user, use Email in lower case';
  }
});

/** *store data */
const dataInputs = document.querySelectorAll('input');
dataInputs.forEach((input) => {
  input.addEventListener('input', () => {
    sessionStorage.setItem(input.name, input.value);
  });
});

dataInputs.forEach((input) => {
  const storedValue = sessionStorage.getItem(input.name);
  if (storedValue) {
    input.value = storedValue;
  }
});
