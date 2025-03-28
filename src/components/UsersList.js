import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UsersList.css';  // If you have styles, keep this import

const UsersList = ({ onLogout }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${page}`)
      .then(response => setUsers(response.data.data))
      .catch(error => console.error('Error fetching users', error));
  }, [page]);

  return (
    <div>
      <h2>Users List</h2>
      <button onClick={onLogout}>Logout</button>
      <div className="user-list">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={user.first_name} />
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
            <Link to={`/edit/${user.id}`}>Edit</Link>
            <button onClick={() => axios.delete(`https://reqres.in/api/users/${user.id}`).then(() => setUsers(users.filter(u => u.id !== user.id)))}>Delete</button>
          </div>
        ))}
      </div>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default UsersList;
