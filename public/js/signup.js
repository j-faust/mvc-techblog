const { application, response } = require("express");

// signup function to handle new user signup
const signUpHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#userSignup').value.trim();
    const email = document.querySelector('#emailSignup').value.trim();
    const password = document.querySelector('#pwSignup').value.trim();

    if(username && email && password) {
        const resp = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(resp.ok) {
            console.log('Signed Up!');
            document.location.replace('/dashboard');
        } else {
            alert('Error: Could not complete sign up!');
        }
    }
};


// event listener for the submit button on the signup form
document
    .querySelector('.acctSignUp')
    .addEventListener('submit', signUpHandler);1