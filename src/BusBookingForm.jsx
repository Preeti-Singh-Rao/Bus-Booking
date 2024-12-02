import React, { useState, useEffect }  from "react";


 const BusBookingForm=({onBooking, editUser, users})=>{
    const [inputData, setInputData]=useState({
       name:"",
       email:"",
       phone:"",
       bustype:"Bus1",
    })

    useEffect(() => {
        if (editUser) {
          const userToEdit = users.find((user) => user.id === editUser);
          if (userToEdit) {
            setInputData({
              name: userToEdit.name,
              email: userToEdit.email,
              phone: userToEdit.phone,
              bustype: userToEdit.bustype,
            });
          }
        }
      }, [editUser, users]);

    const formsubmitHandler=(event)=>{
        event.preventDefault();
        onBooking(inputData.name, inputData.email, inputData.phone, inputData.bustype);
         setInputData({
        name:"",
       email:"",
       phone:"",
       bustype:"Bus1",
         })

    }

    const changeHandler=(event)=>{
        const { name, value } = event.target; 
    setInputData((prevState) => ({
      ...prevState,
      [name]: value, 
    }));
    }
    return(
        
        <div>
            <h1>Bus Booking</h1>
            <form onSubmit={formsubmitHandler}>
                <label htmlFor="name">Name:</label>
                <input type="text"
                 id="name"
                  name="name" 
                  value={inputData.name} 
                  onChange={changeHandler}>

                  </input>
                <label htmlFor="email">Email:</label>
                <input type="email"
                 id="email"
                  name="email" 
                  value={inputData.email} 
                  onChange={changeHandler}>

                  </input>
                <label htmlFor="phone">Phone:</label>
                <input type="number" 
                id="phone" 
                name="phone"
                 value={inputData.phone}
                  onChange={changeHandler}></input>
                
                <label htmlFor="bustype">Bus Number:</label>
                <select id="bustype" 
                name="bustype" 
                value={inputData.bustype} 
                onChange={changeHandler}>
                    <option value="Bus1">Bus1</option>
                    <option value="Bus2">Bus2</option>
                    <option value="Bus3">Bus3</option>
                </select>
                <button type="submit">Book</button>
            </form>
        </div>
       
    )
 }

 export default BusBookingForm;