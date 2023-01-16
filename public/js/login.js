const { application, response } = require("express");

const loginHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#loginUsername').value.trim();
    const password = document.querySelector('#inputPW').value.trim();

    if(username && password) {
        const resp = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if(resp.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Error: Failed to log in!')
        }
    }
};


document
    .querySelector('.login-form')
    .addEventListener('submit', loginHandler);


    