import React, { useState } from 'react';
import UsersList from './components/UsersList';
import UserDetails from './components/UserDetails';
import AddPost from './components/AddPost';
import AddUser from './components/AddUser';

const App: React.FC = () => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [refreshUsers, setRefreshUsers] = useState<boolean>(false);

    const handleSelectUser = (userId: number) => {
        setSelectedUserId(userId);
    };

    const handleUserAdded = () => {
        setRefreshUsers(!refreshUsers); // Toggle to trigger re-fetching users list
    };

    const handlePostAdded = () => {
        // Handle the logic when a post is added
    };

    return (
        <div>
            <AddUser onUserAdded={handleUserAdded} />
            <UsersList onSelectUser={handleSelectUser} refresh={refreshUsers} />
            {selectedUserId && (
                <>
                    <UserDetails userId={selectedUserId} />
                    <AddPost userId={selectedUserId} onPostAdded={handlePostAdded} />
                </>
            )}
        </div>
    );
};

export default App;
