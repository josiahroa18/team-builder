import React from 'react';

function Form(){
    return(
        <form>
            <label>Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
            <label>Role</label>
            <select id='roles' name='roles'>
                <option value='frontEnd'>Front End Engineer</option>
                <option value='backEnd'>Back End Engineer</option>
                <option value='designer'>UX/UI Designer</option>
                <option value='mobileDev'>Mobile Developer</option>
                <option value='dataScience'>Data Science Engineer</option>
                <option value='machineLearning'>Machine Learning Engineer</option>
            </select>
            <button>Add Member</button>
        </form>
    );
}

export default Form;