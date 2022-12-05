import React, {FC, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import OneCurrencyPage from "./Pages/OneCurrencyPage";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import styled from "@emotion/styled";
import UnderHeader from "./components/UnderHeader";
import Footer from "./components/Footer";
import {withTranslation} from "react-i18next";
import Auth from "./Pages/Auth";



const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Gill Sans", sans-serif;
`

const App: FC = () => {
    console.log(process.env.REACT_APP_API)
    return (
                <AppWrapper>
                    <Header/>
                    <UnderHeader/>
                    <Routes>
                        <Route path="/auth" element={<Auth/>}/>
                        <Route path="/homepage" element={<HomePage/>}/>
                        <Route path="/currency/:id" element={<OneCurrencyPage/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/portfolio" element={<Portfolio/>}/>
                        <Route path="/*" element={<HomePage/>}/>
                    </Routes>
                    <Footer/>
                </AppWrapper>

    );
}

export default withTranslation()(App);
