import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import GlobalStyle from "./Style.css/GlobalStyle";

import Login from "../src/Pages/Login"
import Register from "../src/Pages/Register"
import Habits from "../src/Pages/Habits";


import { InfosLogin, AddNewHabit, HabitsList, NewRequisition } from "../src/Contexts"

export default function App() {

    const [infosLogin, setInfosLogin] = useState([]);
    const [addNewHabit, setAddNewHabit] = useState(false);
    const [habitsList, setHabitsList] = useState([]);
    const [newRequisition, setNewRequisition] = useState(false);

    return (
        <>
        <InfosLogin.Provider value={{infosLogin, setInfosLogin}}>
        <HabitsList.Provider value={{habitsList, setHabitsList}}>
        <AddNewHabit.Provider value={{addNewHabit, setAddNewHabit}}>
        <NewRequisition.Provider value={{newRequisition, setNewRequisition}}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/Register" element={<Register />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/Habits" element={<Habits />} />
                </Routes>
            </BrowserRouter>
        </NewRequisition.Provider>
        </AddNewHabit.Provider>
        </HabitsList.Provider>
        </InfosLogin.Provider>
        </>
    )
}