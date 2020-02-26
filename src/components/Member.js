import React from 'react';

function Member({members}){
    console.log(members);
    return (
        <div>
            {members.map(member => {
                return <div>
                    <h3>{member.name}</h3>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            })}
        </div>
    )
}

export default Member;