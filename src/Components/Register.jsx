import ImgLogo from "../Images/Logo.png"
import Loading from "./Loading"

import styled from 'styled-components';

export default function Register() {
    function onSubmit() {

    }
    return (
        <Container>
        <Center>
            <Logo src={ImgLogo} alt="" />
            <Form onSubmit={onSubmit()}>
                <Input
                    type="email"
                    // value={email}
                    placeholder="email"
                    required
                />
                <Input
                    type="password"
                    // value={password}
                    placeholder="senha"
                />
                <Input
                    type="text"
                    // value={name}
                    placeholder="nome"
                    required

                />
                <Input
                    type="url"
                    // value={picture}
                    placeholder="foto"
                    required

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