
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
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

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

    if (isEdit) {
      const updatedData = [...data];
      updatedData[editIndex] = {
        room,
        date,
        start,
        end,
        title,
      };
      setData(updatedData);
      setIsEdit(false);
      setEditIndex(null);
    } else {
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
  }

  const handleSubmit = (e) => {
    //const formRef = React.createRef();
    e.preventDefault();
    updateValue(room);
   // formRef.current.reset();
    setRoom('');
    setDate('');
    setStart('');
    setEnd('');
    setTitle('');  
  };

  const handleEdit = (index) => {
    const editData = data[index];
    setRoom(editData.room);
    setDate(editData.date);
    setStart(editData.start);
    setEnd(editData.end);
    setTitle(editData.title);
    setIsEdit(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const deletedData = data[index];
    if (deletedData.room === 'Conference Room A') {
      setConf((prevConf) => prevConf + 1);
    } else if (deletedData.room === 'Meeting Room B') {
      setMeet((prevMeet) => prevMeet + 1);
    } else {
      setBoard((prevBoard) => prevBoard + 1);
    }
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  return (
    <>
      <div className="header">
        <center>
          <h1>Meeting Room Booking System</h1>
        </center>
      </div>
      <div id="main">
        <div className="div">
          <h1>Available Rooms</h1>
          <h3 id="conf">{`Conference Room A (Capacity: ${conf})`}</h3>
          <h3 id="meet">{`Meeting Room B (Capacity: ${meet})`}</h3>
          <h3 id="board">{`Board Room (Capacity: ${board})`}</h3>
        </div>

        <div className="div">
          <form  onSubmit={handleSubmit} id="form">
            <h1>Book a Room</h1>
            <h3>Room:</h3>
            <select onChange={(e) => setRoom(e.target.value) } required>
              <option value="Select a Room">Select a Room</option>
              <option value="Conference Room A">Conference Room A</option>
              <option value="Meeting Room B">Meeting Room B</option>
              <option value="Board Room">Board Room</option>
            </select>

            <h3>Date:</h3>
            <input
              type="date"
              value={date}
              
              id="date"
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <h3>Start Time:</h3>
            <input
              type="time"
              value={start}

              id="start"
              onChange={(e) => setStart(e.target.value)}
              required
            />
            <h3>End Time:</h3>
            <input
              type="time"
              value={end}
              id="end"
              onChange={(e) => setEnd(e.target.value)}
              required
            />
            <h3>Meeting Title:</h3>
            <input
              type="text"
              value={title}
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <br />
            <button type="submit">
              {isEdit ? "Update Booking" : "Book Room"}
            </button>
          </form>
        </div>
      </div>
      <center>
        
        <div id="navbar">
          <h1>Booking Management</h1>
          <table border={1} className="table">
              <thead>
              <tr>
              <th>Index</th>
                <th>Room</th>
                <th>Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Meeting Title</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id='content'>
              {data.map((booking, index) => (
                <tr key={index }>
                
                <td>{index +1}</td>
                  <td>{booking.room}</td>
                  <td>{booking.date}</td>
                  <td>{booking.start}</td>
                  <td>{booking.end}</td>
                  <td>{booking.title}</td>
                  <td ><button onClick={()=>handleEdit(index)} id='update'>Update</button></td>
                  <td><button onClick={()=>handleDelete(index)} id='delete'>Delete</button></td>
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
