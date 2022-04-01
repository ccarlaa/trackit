import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import GlobalStyle from "./Style.css/GlobalStyle";

import Login from "../src/Pages/Login"
import Register from "../src/Pages/Register"
import Habits from "../src/Pages/Habits";

import {InfosLogin} from "./Contexts"
import {AddNewHabit} from "./Contexts"


export default function App() {

    const [infosLogin, setInfosLogin] = useState([])
    const [addNewHabit, setAddNewHabit] = useState(false)
    console.log(infosLogin)
    return (
        <>
        <InfosLogin.Provider value={{infosLogin, setInfosLogin}}>
        <AddNewHabit.Provider value={{addNewHabit, setAddNewHabit}}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/Register" element={<Register />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/Habits" element={<Habits />} />
                </Routes>
            </BrowserRouter>
            {/* <Habits /> */}
        </AddNewHabit.Provider>
        </InfosLogin.Provider>
        </>
    )
}