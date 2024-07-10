import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { User } from '../types';

interface UsersListProps {
    onSelectUser: (userId: number) => void;
}

const UsersList: React.FC<UsersListProps> = ({ onSelectUser }) => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id} onClick={() => onSelectUser(user.id)}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
