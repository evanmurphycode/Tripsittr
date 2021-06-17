

function createPost() {

    let newPost = document.getElementById('post').value;

    let newPostArea = document.getElementById('new_post');

    let lastestPost = document.createElement("div");
    lastestPost.className = `new_post`;
    
    

    lastestPost.innerHTML = `
    <img id="profile_pic" src="profile-picture.jpg" alt="Profile Picture">
    <p>${newPost}</p>
    <input id="comment" name="comment" placeholder="Add your comment">
    <button id="comment_button">Comment</button>
    `
    newPostArea.appendChild(lastestPost);
}



/* Set up your submit button (let variable = doc.getElementById('id'))
variable.addEventListener('click', function) */
function main(){
    let postButton = document.getElementById('post_button');
    postButton.addEventListener('click', createPost)

}


window.addEventListener("load", main);