const logoutHandler = async () => {
    const resp = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if(resp.ok) {
        document.location.replace('/');
    } else {
        alert('Could not log out user!');
    }
};

document.querySelector('#logout').addEventListener('click', logoutHandler);