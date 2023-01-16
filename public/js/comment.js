
// function to handle the posting of a comment
const commentHandler = async (event) => {
    event.preventDefault();
    // assigning comment text to variable
    const commentText = document.querySelector('textarea[name = "main-comment-body"]').value.trim();
    // assigning the post id to a variable
    const postId = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if(commentText) {
        const resp = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                postId,
                commentText,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if(resp.ok){
            document.location.reload();
        } else {
            alert('Something went wrong! Please try again!');
        }
    }
};

document
    .querySelector('.post-comment-form')
    .addEventListener('submit', commentHandler);