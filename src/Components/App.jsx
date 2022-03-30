import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "../Style.css/GlobalStyle";

import Login from "./Login"
import Register from "./Register"
import Loading from "./Loading";


export default function App() {
    return (
        <>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
        </BrowserRouter>
        <Loading />
        </>
    )
}