import React, {FC, useState} from 'react';
import {login, registration} from "../../utils/server";
import {AuthButton, WrapperLogIn} from "./styles";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {IUser, logIn} from "../../store/reducers/userSlice";
import {useNavigate} from "react-router-dom";

import {useTranslation} from "react-i18next";
import StyledButton from "../../components/StyledButton";
import {Title} from "../Portfolio/styles";
import {verifyLogin, verifyPassword} from "../../utils/verifyLoginPassword";

const Auth :FC = () => {
    const [email, setEmail] = useState("")
    const {t} = useTranslation()
    const [password, setPassword] = useState("")

    const dispatch = useAppDispatch();
    const navigateTo = useNavigate()
    const logInFunc = async (log: boolean)=>{
        if (verifyLogin(email) && verifyPassword(password)){
            const user = log?await login(email, password):await registration(email, password)
            dispatch(logIn(user as IUser))
            navigateTo('/')
        }

    }
    return (
        <WrapperLogIn style={{flexDirection: 'column'}}>
            <Title>{t('Auth.Title')}</Title>
            <div>{t('Auth.email')}</div>
          <input value={email} placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <div>{t('Auth.password')}</div>
            <input type="password" value={password} placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <StyledButton onClick={()=>logInFunc(true)}>{t('Auth.LogIn')}</StyledButton>
            <StyledButton onClick={()=>logInFunc(false)}>{t('Auth.Registrate')}</StyledButton>
        </WrapperLogIn>
    );
};

export default Auth;
