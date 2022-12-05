import React, {FC, useState} from 'react';

const Auth :FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const logIn = ()=>{
        null
    }
    return (
        <div>
          <input value={email} placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" value={password} placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <div onClick={logIn}>
                click on me!!!
            </div>
        </div>
    );
};

export default Auth;
