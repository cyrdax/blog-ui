import React, { useState } from 'react';
import axios from 'axios';

interface AddUserProps {
  onUserAdded: () => void;
}

const AddUser: React.FC<AddUserProps> = ({ onUserAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('http://localhost:3000/users', {
      user: { name, email, picture, bio }
    })
      .then(response => {
        onUserAdded();
        setName('');
        setEmail('');
        setPicture('');
        setBio('');
      })
      .catch(error => {
        console.error('There was an error creating the user!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New User</h3>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Picture URL</label>
        <input
          type="text"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
        />
      </div>
      <div>
        <label>Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
