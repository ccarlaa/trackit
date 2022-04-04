import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import GlobalStyle from "./Style.css/GlobalStyle";
import Login from "../src/Pages/Login"
import Register from "../src/Pages/Register"
import Habits from "../src/Pages/Habits";
import Today from "./Pages/Today"
import Historic from "./Pages/Historic"
import { InfosLogin, AddNewHabit, HabitsList, NewRequisition, HabitsToday, Score } from "../src/Contexts"

export default function App() {
    const [infosLogin, setInfosLogin] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);
    const [addNewHabit, setAddNewHabit] = useState(false);
    const [habitsList, setHabitsList] = useState([]);
    const [newRequisition, setNewRequisition] = useState(false);
    const [habitsToday, setHabitsToday] = useState([]);
    const [score, setScore] = useState(0);
    return (
        <>
        <InfosLogin.Provider value={{infosLogin, setInfosLogin}} >
        <HabitsList.Provider value={{habitsList, setHabitsList}} >
        <AddNewHabit.Provider value={{addNewHabit, setAddNewHabit}} >
        <NewRequisition.Provider value={{newRequisition, setNewRequisition}} >
        <HabitsToday.Provider value={{habitsToday, setHabitsToday}} >
        <Score.Provider value={{score, setScore}} >
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/Register" element={<Register />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/Habits" element={<Habits />} />
                    <Route path="/Today" element={<Today />} />
                    <Route path="/Historic" element={<Historic />} />
                </Routes>
            </BrowserRouter >
        </Score.Provider >
        </HabitsToday.Provider>
        </NewRequisition.Provider >
        </AddNewHabit.Provider >
        </HabitsList.Provider >
        </InfosLogin.Provider >
        </>
    )
}