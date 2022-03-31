import { useState } from 'react';
import styled from 'styled-components';

import ImgLogo from "../Images/Logo.png"
// import Loading from "./Loading"

export default function Register() {
    const [registerInfos, setRegisterInfos] = useState({
        email: "", 
        password: "",
        fullname: "", 
        photo: ""
    })
    function onSubmit() {

    }
    return (
        <Container>
        <Center>
            <Logo src={ImgLogo} alt="" />
            <Form onSubmit={onSubmit()}>
                <Input
                    type="email"
                    value={registerInfos.email}
                    placeholder="email"
                    required
                    onChange={(email) =>{setRegisterInfos(...registerInfos, {email: email.target.value}) ; console.log( email.target.value)}}
                />
                <Input
                    type="password"
                    value={registerInfos.password}
                    placeholder="senha"
                    required
                    onChange={(e) => {setRegisterInfos(...registerInfos, {password: e.target.value}) ; console.log("preenchendo password")}}
                />
                <Input
                    type="text"
                    value={registerInfos.fullname}
                    placeholder="nome"
                    required
                    onChange={(e) => {setRegisterInfos(...registerInfos, {fullname: e.target.value}) ; console.log("preenchendo name")}}
                />
                <Input
                    type="url"
                    value={registerInfos.photo}
                    placeholder="foto"
                    required
                    onChange={(e) => {setRegisterInfos(...registerInfos, {photo: e.target.value}) ; console.log("preenchendo email")}}
                />
                <Button type="submit" className="submit">
                    Cadastrar
                </Button>
            </Form >
        </Center>
    </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    position: relative;
    display: flex;
    justify-content: center;
    bottom: 50px;
`

const Center = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Logo = styled.img`
    width: 60%;
    height: 30%;
`
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Input = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    box-sizing: border-box;
    margin-bottom: 10px;
    padding-left: 10px;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
`
const Button = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background: #52B6FF;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 21px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    color: white;
    cursor: pointer;

    &:disabled {
    background-color: grey;
    opacity: 0.7;
    cursor: default;
  }
`