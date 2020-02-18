import React from 'react';

const Log =()=>{
    return(
        <div>
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
        </div>
    )
}
export default Log;