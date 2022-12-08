import React, {FC, useEffect, useState} from 'react';
import {WrapperLogIn} from "./styles";
import {changeRole, getAllUsers} from "../../utils/server";
import {Title} from "../About/styles";
import {StyledTable, StyledTBody, StyledTd, StyledTh, StyledTHead, StyledTr} from "../HomePage/styles";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";


const Admin :FC = () => {
    const users = getAllUsers()
    const [usersTable, setUsersTable] = useState<any>([])
    const {t} = useTranslation()
    const navigate = useNavigate()
    const roles = [
        'admin', 'user','blocked'
    ]

    useEffect(()=>{
        users.then((res:any)=>setUsersTable(res))
    }, [])

    const changeRoleHandler = async( id:string, role:string)=>{
        await changeRole(id, role)
        await getAllUsers().then((res:any)=>setUsersTable(res))
    }

    return (
        <WrapperLogIn style={{flexDirection: 'column'}}>
            <Title>{t('Admin.Title')}</Title>
            <StyledTable>
                <StyledTHead>
                    <StyledTr>
                       <StyledTh>id</StyledTh>
                        <StyledTh>email</StyledTh>
                        <StyledTh>{t('Admin.role')}</StyledTh>
                    </StyledTr>
                </StyledTHead>

                <StyledTBody>
                    {
                        Array.isArray(usersTable)?
                        usersTable.map((element:any) =>
                            <StyledTr key={element.id}>
                               <StyledTd>{element.id}</StyledTd>
                                <StyledTd>{element.email}</StyledTd>
                                <StyledTd>
                                    <select value={element.role} onChange={(e)=> changeRoleHandler(element.id,e.target.value)}>
                                        {roles.map((role, key)=>
                                            <option value={role} key={key}>{t(`Admin.${role}`)}</option>
                                        )}
                                    </select>
                                </StyledTd>
                            </StyledTr>
                        ):null
                    }
                </StyledTBody>
            </StyledTable>
        </WrapperLogIn>
    );
};

export default Admin;
