import React from "react";

const bookingList = ({ users,onDelete, onEdit  }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Bus Type:</strong> {user.bustype}</p>
          <button onClick={() => onEdit(user.id)}>Edit</button>
          <button onClick={() => onDelete(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default bookingList;
