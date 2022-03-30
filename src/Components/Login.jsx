import styled from 'styled-components';
import Loading from "./Loading"


import ImgLogo from "../Images/Logo.png"

export default function Login() {
    return (
        <Container>
            <Center>
                <Logo src={ImgLogo} alt="" />
                <Form >
                    <Input
                        type="email"
                        // value={email}
                        placeholder="email"
                    />
                    <Input
                        type="password"
                        // value={email}
                        placeholder="senha"
                    />
                    <Button type="submit" className="submit">
                        Entrar
                        <Loading />
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
`