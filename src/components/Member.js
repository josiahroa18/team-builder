import React from 'react';

function Member({members}){
    return (
        <div>
            {members.map(member => {
                return <div key={member.id}>
                    <h3>{member.name}</h3>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            })}
        </div>
    )
}

export default Member;