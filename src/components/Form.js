import React, { useState } from 'react';

function Form(props){
    // State for inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    // const [errors, setErrors] = useState([]);

    // Handle changes to name input
    function handleNameChange(e){
        setName(e.target.value);
    }

    // Handle changes to email input
    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    // Handle changes to role input
    function handleRoleChange(e){
        setRole(e.target.value);
    }

    // Handle form submission
    function submitForm(e){
        let valid = true;
        const errors = [];
        e.preventDefault();
        if(name === ''){
            valid = false;
                // setErrors([...errors, 'Please enter a name']);
            errors.push('Please enter a name');
        }
        if(name.length < 3){
            valid = false;
            // setErrors(errors.push('Names must be at least 3 characters long'));
        }
        if(email === ''){
            valid = false;
            // setErrors(errors.push('Please enter an email'));
        }
        if(role === ''){
            valid = false;
            // setErrors(errors.push('Please select a role'));
        }

        if(valid){
            const newMember = {
                name: name,
                email: email,
                role: role
            }
            props.addNewMember(newMember);
            setName('');
            setEmail('');
            setRole('');
            // setErrors('');
        }else{
            props.handleError(errors);
        }
    }

    return(
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input 
                type='text' 
                onChange={handleNameChange}
                value={name}
                placeholder='name'
            >
            </input>
            <label htmlFor='email'>Email</label>
            <input 
                type='email' 
                onChange={handleEmailChange}
                value={email}
                placeholder='email'
            >
            </input>
            <label htmlFor='role'>Role</label>
            <select id='roles' onChange={handleRoleChange} value={role}>
                <option value='' disabled>Select Role</option>
                <option value='Front End Engineer'>Front End Engineer</option>
                <option value='Back End Engineer'>Back End Engineer</option>
                <option value='Full Stack Developer'>Full Stack Developer</option>
                <option value='UX/UI Designer'>UX/UI Designer</option>
                <option value='Mobile Developer'>Mobile Developer</option>
                <option value='Data Science Engineer'>Data Science Engineer</option>
                <option value='Machine Learning Engineer'>Machine Learning Engineer</option>
            </select>
            <button type='submit' value='submit'>Add Member</button>
        </form>
    );
}

export default Form;