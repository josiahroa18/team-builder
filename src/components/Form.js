import React, { useState } from 'react';

function Form(props){
    // State for inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    // Handle changes to name input
    function handleNameChange(e){
        setName(e.target.value);
    }

    // Handle changes to email input
    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    // Handle form submission
    function submitForm(e){
        e.preventDefault();
        const newMember = {
            name: name,
            email: email,
            role: role
        }
        props.addNewMember(newMember);
        setName('');
        setEmail('');
        setRole('');
    }

    return(
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input 
                type='text' 
                onChange={handleNameChange}
                value={name}
            >
            </input>
            <label htmlFor='email'>Email</label>
            <input 
                type='email' 
                onChange={handleEmailChange}
                value={email}
            >
            </input>
            <label htmlFor='role'>Role</label>
            <select id='roles' name='roles'>
                <option value='frontEnd' selected>Front End Engineer</option>
                <option value='backEnd'>Back End Engineer</option>
                <option value='fullStack'>Full Stack Developer</option>
                <option value='designer'>UX/UI Designer</option>
                <option value='mobileDev'>Mobile Developer</option>
                <option value='dataScience'>Data Science Engineer</option>
                <option value='machineLearning'>Machine Learning Engineer</option>
            </select>
            <button type='submit' value='submit'>Add Member</button>
        </form>
    );
}

export default Form;