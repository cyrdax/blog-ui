import React, { useState } from 'react';
import axios from 'axios';

interface AddLinkProps {
    postId: number;
    onLinkAdded: () => void;
}

const AddLink: React.FC<AddLinkProps> = ({ postId, onLinkAdded }) => {
    const [linkName, setLinkName] = useState('');
    const [linkUrl, setLinkUrl] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post(`http://localhost:3000/posts/${postId}/links`, {
            link: { link_name: linkName, link_url: linkUrl }
        })
            .then(response => {
                onLinkAdded();
                setLinkName('');
                setLinkUrl('');
            })
            .catch(error => {
                console.error('There was an error creating the link!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add New Link</h3>
            <div>
                <label>Link Name</label>
                <input
                    type="text"
                    value={linkName}
                    onChange={(e) => setLinkName(e.target.value)}
                />
            </div>
            <div>
                <label>Link URL</label>
                <input
                    type="text"
                    value={linkUrl}
                    onChange={(e) => setLinkUrl(e.target.value)}
                />
            </div>
            <button type="submit">Add Link</button>
        </form>
    );
};

export default AddLink;
