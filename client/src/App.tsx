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
import {trpc} from "./utils/trpc";
import {httpBatchLink} from "@trpc/client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Gill Sans", sans-serif;
`

const App: FC = () => {

    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({
                    url: 'http://localhost:4200/trpc',
                }),
            ],
        }),
    );
    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <AppWrapper>
                    <Header/>
                    <UnderHeader/>
                    <Routes>
                        <Route path="/homepage" element={<HomePage/>}/>
                        <Route path="/currency/:id" element={<OneCurrencyPage/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/portfolio" element={<Portfolio/>}/>
                        <Route path="/*" element={<HomePage/>}/>
                    </Routes>
                    <Footer/>
                </AppWrapper>
            </QueryClientProvider>
        </trpc.Provider>

    );
}

export default withTranslation()(App);
