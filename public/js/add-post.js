// function to add post to blog
const addPostHandler = async (event) => {
    event.preventDefault();
    // creating variables from the post text and title areas
    const title = document.querySelector('input[name="postTitleArea"]').value;
    const postTextArea = document.querySelector('textarea[name="postTextArea"]').value.trim();

    // method to post the blog post to the API
    const resp = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            postTextArea,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // if response is 'ok' then redirect the user to the dashboard
    if(resp.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Error: Could Not Add Post!');
    }
};
// event listener for click to add post
document
    .querySelector('.add-post-form')
    .addEventListener('submit', addPostHandler);