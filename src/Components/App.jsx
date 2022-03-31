import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import GlobalStyle from "../Style.css/GlobalStyle";

import Login from "./Login"
import Register from "./Register"
import Habits from "./Habits";

import {InfosLogin} from "./Contexts"


export default function App() {

    const [infosLogin, setInfosLogin] = useState([])
    console.log(infosLogin)
    return (
        <>
        <InfosLogin.Provider value={{infosLogin, setInfosLogin}}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/Register" element={<Register />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/Habits" element={<Habits />} />
                </Routes>
            </BrowserRouter>
        </InfosLogin.Provider>
        </>
    )
}