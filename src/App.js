import React, { useState } from 'react';
import Member from './components/Member';
import Form from './components/Form';
import './App.css';

function App() {
  const [members, setMembers] = useState([]);

  return (
    <div className="App">
      {members.map((member, index) => {
        return <Member member={member}/>
      })}
      <h1>Add New Member</h1>
      <Form/>
    </div>
  );
}

export default App;
