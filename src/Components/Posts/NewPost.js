import React from 'react';

const NewPost = () => {
    return (
        <div>

            <form>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title"></input>
                <label htmlFor="post">Post:</label>
                <textarea type="text" name="post" id="post"></textarea>
            </form>
            <button>
                create new post
            </button>
        </div>
    );
}

export default NewPost;
