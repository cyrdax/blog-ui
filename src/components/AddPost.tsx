import React, { useState } from 'react';
import axios from 'axios';

interface AddPostProps {
    userId: number;
    onPostAdded: () => void;
}

const AddPost: React.FC<AddPostProps> = ({ userId, onPostAdded }) => {
    const [subject, setSubject] = useState('');
    const [postText, setPostText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post(`http://localhost:3000/users/${userId}/posts`, {
            post: { subject, post_text: postText }
        })
            .then(response => {
                onPostAdded();
                setSubject('');
                setPostText('');
            })
            .catch(error => {
                console.error('There was an error creating the post!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add New Post</h3>
            <div>
                <label>Subject</label>
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
            </div>
            <div>
                <label>Post Text</label>
                <textarea
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                />
            </div>
            <button type="submit">Add Post</button>
        </form>
    );
};

export default AddPost;
