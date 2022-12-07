import React, {FC, useEffect, useState} from 'react';
import {WrapperLogIn} from "./styles";
import {getAllUsers} from "../../utils/server";
import {Title} from "../About/styles";
import {StyledTable, StyledTBody, StyledTd, StyledTh, StyledTHead, StyledTr} from "../HomePage/styles";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";


const Admin :FC = () => {
    const users = getAllUsers()
    const [usersTable, setUsersTable] = useState<any>([])
    const {t} = useTranslation()
    const navigate = useNavigate()
    const changeRole = async (id:number) => {
        null
    }

    useEffect(()=>{
        setUsersTable(users.then((res:any)=>res))
        console.log(usersTable)
    }, [])

    useEffect(()=>{
        console.log(usersTable)
    }, [usersTable])

    return (
        <WrapperLogIn style={{flexDirection: 'column'}}>
            <Title>Admin panel</Title>
            <StyledTable>
                <StyledTHead>
                    <StyledTr>
                       <StyledTh>id</StyledTh>
                        <StyledTh>email</StyledTh>
                        <StyledTh>role</StyledTh>
                    </StyledTr>
                </StyledTHead>

                <StyledTBody>
                    {/*{*/}
                    {/*    usersTable.map((element:any) =>*/}
                    {/*        <StyledTr key={element.id}>*/}
                    {/*           <StyledTd>{element.id}</StyledTd>*/}
                    {/*            <StyledTd>{element.email}</StyledTd>*/}
                    {/*            <StyledTd>{element.password}</StyledTd>*/}
                    {/*        </StyledTr>*/}
                    {/*    )*/}
                    {/*}*/}
                </StyledTBody>
            </StyledTable>
        </WrapperLogIn>
    );
};

export default Admin;
