import { useState } from 'react';
import './App.css';
import BusBookingForm from './BusBookingForm';
import BookingList from './bookingList';


function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser]=useState(null);
  const [busFilter, setBusFilter] = useState("All");

  const addBooking = (uName, uEmail, uPhone, uBustype) => {
    if (editUser) {
      
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === editUser
            ? { ...user, name: uName, email: uEmail, phone: uPhone, bustype: uBustype }
            : user
        )
      );
      setEditUser(null); 
    } else {
      
      setUsers((prevUsersList) => [
        ...prevUsersList,
        { name: uName, email: uEmail, phone: uPhone, bustype: uBustype, id: Math.random().toString() },
      ]);
    }
  };

  const deleteBooking = (id) => {
    setUsers((prevUsersList) => prevUsersList.filter((user) => user.id !== id));
  };

  const editBooking = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    if (userToEdit) {
      setEditUser(id); 
    }
  };

  const filteredUsers = busFilter === "All" ? users : users.filter((user) => user.bustype === busFilter);

  return (
    <>
      <BusBookingForm onBooking={addBooking} editUser={editUser} users={users}/>
      <div>
        <label htmlFor="busFilter">Filter: </label>
        <select
          id="busFilter"
          value={busFilter}
          onChange={(event) => setBusFilter(event.target.value)}
        >
          <option value="All">All</option>
          <option value="Bus1">Bus1</option>
          <option value="Bus2">Bus2</option>
          <option value="Bus3">Bus3</option>
        </select>
        </div>
      <BookingList users={filteredUsers} onDelete={deleteBooking} onEdit={editBooking} />
     
    </>
  );
}

export default App;
