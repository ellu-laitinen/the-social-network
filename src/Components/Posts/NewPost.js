import React from 'react';

const NewPost = () => {
    return (
        <div className="container">
            <div className="row">
                <h1> New post </h1>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s8">
                            <input type="text" name="firstname" id="firstname"></input>
                            <label htmlFor="firstname">Title</label>
                        </div>
                    </div>
                    <div class="row">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s12">
                                    <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Textarea</label>
                                </div>
                            </div>
                        </form>
                    </div>




                </form>
                <button className="waves-effect waves-light btn">Create new post</button>
            </div>
        </div>
    );
}

export default NewPost;
