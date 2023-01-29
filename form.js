//* ******Validate form email*******
const errorMessage = document.getElementById('error');
const pageForm = document.getElementById('form');
const Emails = document.getElementById('Emails');
//* ***validate*****

const emailValidation = (input) => {
  if (input === input.toLowerCase()) {
    return true;
  }
  return false;
};
pageForm.addEventListener('submit', (event) => {
  errorMessage.innerHTML = '';
  if (emailValidation(Emails.value)) {
    errorMessage.innerHTML = '';
  } else {
    event.preventDefault();
    errorMessage.innerHTML = 'Please Dear user, use Email in lower case';
  }
});

// ************storing data locally ***********
const DataForLocal = document.querySelectorAll('.form-input');
const storageForLocal = {
  name: '',
  email: '',
  message: '',
};
DataForLocal.forEach((input) => {
  input.addEventListener('input', () => {
    storageForLocal[input.name] = input.value;
    storageForLocal[input.email] = input.value;
    storageForLocal[input.message] = input.value;
    storageForLocal.setItem('information', JSON.stringify(storageForLocal));
  });
});
const informationStored = JSON.parse(storageForLocal.getItem('information'));
if (informationStored) {
  DataForLocal.forEach((element) => {
    element.value = informationStored[element.name];
  });
}