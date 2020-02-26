import React, { useState, useEffect } from 'react';

function Error(props){
    const [ name, setName ] = useState('error-container')

    useEffect(() => {
        if(props.errorArr.length < 1){
            setName('error-container none');
        }
        else{
            setName('error-container');
        }
    }, [name])

    return(
        <div className={name}>
            <p>Please enter a name</p>
            <p>Please enter an email</p>
        </div>
    )
}

export default Error;