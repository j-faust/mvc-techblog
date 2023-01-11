const { application, response } = require("express");

const loginHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(email && password) {
        const resp = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if(resp.ok) {
            document.location.replace('/');
        } else {
            alert('Error: Failed to log in!')
        }
    }
};

const signUpHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if(username && email && password) {
        const resp = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(resp.ok) {
            document.location.replace('/');
        } else {
            alert('Error: Could not complete sign up!');
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signUpHandler);

