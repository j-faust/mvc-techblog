
// function to handle eding a blog post
const editPostHandler = async (event) => {
    event.preventDefault();
    // get the title of the post being edited and assign to a variable
    const title = document.querySelector('input[name = "#post_title"]').value;
    // get id for the post being edited and assign to a variable
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    // get the content from the post being edited and assign to a variable
    const postContent = document.querySelector('input[name = "post_text"]').value;

    // updating to the post to the api db
    const resp = await fetch(`/api/posts/${id}`, {
        method: `PUT`,
        body: JSON.stringify({
            title,
            postContent,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // redirecting the user to the dashboard if 'ok' response is received
    if(resp.ok) {
        document.location.replace('/dashboard')
    } else{ 
        alert('Something went wrong!')
    }
};


// event listener for click
document
    .querySelector('.editPostForm')
    .addEventListener('submit', editPostHandler);