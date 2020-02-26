import React, { useState } from 'react';
import Member from './components/Member';
import Form from './components/Form';
import Error from './components/Error';
import './App.css';

function App() {
  const [members, setMembers] = useState([{
    id: 1,
    name: 'Josiah Roa',
    email: 'josiahroa18@gmail.com',
    role: 'Full Stack Developer'
  }]);
  const [errorArr, setErrorArr] = useState([]);

  function addNewMember(member){
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  }

  function handleError(errors){
    setErrorArr(errors);
    // console.log(errors);
  }

  return (
    <div className="App">
      <div className='form-container'>
        <h1>Add New Member</h1>
        <Error errorArr={errorArr}/>
        <Form addNewMember={addNewMember} handleError={handleError}/>
      </div>
      <Member members={members}/>
    </div>
  );
}

export default App;
