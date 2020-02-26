import React, { useState } from 'react';
import Member from './components/Member';
import Form from './components/Form';
import './App.css';

function App() {
  const [members, setMembers] = useState([{
    id: 1,
    name: 'Josiah Roa',
    email: 'josiahroa18@gmail.com',
    role: 'Full Stack Developer'
  }]);

  function addNewMember(member){
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  }

  return (
    <div className="App">
      <Member members={members}/>
      <h1>Add New Member</h1>
      <Form addNewMember={addNewMember}/>
    </div>
  );
}

export default App;
