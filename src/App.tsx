import React, { useState } from 'react';
import UsersList from './components/UsersList';
import UserDetails from './components/UserDetails';
import AddPost from './components/AddPost';

const App: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const handleSelectUser = (userId: number) => {
    setSelectedUserId(userId);
  };

  const handlePostAdded = () => {
    // Handle the logic when a post is added
  };

  return (
      <div>
        <UsersList onSelectUser={handleSelectUser} />
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
