'use strict';
const email = document.querySelector('#email');
const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let emailVal = email.value;

  if (!validateEmail(emailVal)) {
    form.classList.add('error');
  } else {
    form.classList.remove('error');
  }

  form.reset();
})

const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};