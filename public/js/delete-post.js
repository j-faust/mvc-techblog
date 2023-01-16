
// function to handle deleting the post
const deletePostHandler = async (event) => {
    event.preventDefault();
    // assigning the id from the post to a variable
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    // delete post from the api db
    const resp = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
    });
    // if response is 'ok' then user will be redirected to the dashboard
    if(resp.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Cannot Delete Post!')
    }
};

// event listener waiting for click
document
    .querySelector('.deletePostBtn')
    .addEventListener('submit', deletePostHandler);