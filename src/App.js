
import './App.css';
import React, { useState } from 'react';

function App() {
  const [room, setRoom] = useState('');
  const [conf, setConf] = useState(20);
  const [meet, setMeet] = useState(6);
  const [board, setBoard] = useState(10);
  let [date, setDate] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [title, setTitle] = useState('');
  const [data, setData] = useState([]);

  function updateValue(room) {
    console.log(room);
    if (room === 'Conference Room A') {
      setConf((prevConf) => prevConf - 1);
      console.log(conf);
    } else if (room === 'Meeting Room B') {
      setMeet((prevMeet) => prevMeet - 1);
    } else {
      setBoard((prevBoard) => prevBoard - 1);
    }

    setData([
      ...data,
      {
        room,
        date,
        start,
        end,
        title,
      },
    ]);
    

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateValue(room);
    
    
    

    
  };

  return (
    <>
      <div className='header'>
        <center><h1> Meeting Room Booking System</h1></center>
      </div>
      <div id="main">
        <div className="div">
          <h1>Available Rooms</h1>
          <h3 id="conf">{`Conference Room A (Capacity: ${conf})`}</h3>
          <h3 id="meet">{`Meeting Room B (Capacity: ${meet})`}</h3>
          <h3 id="board">{`Board Room (Capacity: ${board})`}</h3>
        </div>

        <div className="div">
          <form onSubmit={handleSubmit} id='form'>
          <h1>Book a Room</h1>
            <h3>Room:</h3>
            <select onChange={(e) => setRoom(e.target.value)} required>
              <option value="">Select a Room</option>
              <option value="Conference Room A">Conference Room A</option>
              <option value="Meeting Room B">Meeting Room B</option>
              <option value="Board Room">Board Room</option>
            </select>

            <h3>Date:</h3>
            <input
              type="date"
              id="date"
              onChange={(e) => setDate(e.target.value)}
              required
            ></input>
            <h3>Start Time:</h3>
            <input
              type="time"
              id="start"
              onChange={(e) => setStart(e.target.value)}
              required
            ></input>
            <h3>End Time:</h3>
            <input
              type="time"
              id="end"
              onChange={(e) => setEnd(e.target.value)}
              required
            ></input>
            <h3>Meeting Title:</h3>
            <input
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              required
            ></input>
            <br />
            <button type="submit">Book Room</button>
          </form>
        </div>
      </div>
      <center>
        <div id="navbar">
          <h1>Booking Management</h1>
          <table border={1} className="table">
            <thead>
              <tr>
                <th>Room</th>
                <th>Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Meeting Title</th>
              </tr>
            </thead>
            <tbody>
              {data.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.room}</td>
                  <td>{booking.date}</td>
                  <td>{booking.start}</td>
                  <td>{booking.end}</td>
                  <td>{booking.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </center>
    </>
  );
}

export default App;
