import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { User } from '../types';

interface UserDetailsProps {
    userId: number;
}

const UserDetails: React.FC<UserDetailsProps> = ({ userId }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${userId}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the user!', error);
            });
    }, [userId]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.bio}</p>
            <h3>Posts</h3>
            <ul>
                {user.posts.map(post => (
                    <li key={post.id}>
                        <h4>{post.subject}</h4>
                        <p>{post.post_text}</p>
                        <h5>Links</h5>
                        <ul>
                            {post.links.map(link => (
                                <li key={link.id}>
                                    <a href={link.link_url}>{link.link_name}</a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserDetails;
