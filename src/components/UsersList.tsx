import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import { User } from '../types';

interface UsersListProps {
    onSelectUser: (userId: number) => void;
    refresh: boolean;
}

const UsersList: React.FC<UsersListProps> = ({ onSelectUser, refresh }) => {
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = () => {
        api.get('/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    };

    useEffect(() => {
        fetchUsers();
    }, [refresh]);

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
