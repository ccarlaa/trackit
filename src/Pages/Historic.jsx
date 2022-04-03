import Header from '../Components/Header';
import Footer from '../Components/Footer';
import styled from 'styled-components';

export default function Historic() {
    return (
        <>
            <Header />
            <Footer />
            <Container>
                <Center>
                    <Title>
                        <NamePage>Histórico</NamePage>
                        <Description>Em breve você poderá ver o histórico dos seus hábitos aqui!</Description>
                    </Title>
                </Center>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F2F2F2;
    padding-top: 80px;
    padding-bottom: 90px;
    font-family: Lexend Deca;
    display: flex;
    justify-content: center
`
const Center = styled.div`
    width: 92%;
    height: 100%;
`
const Title = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`
const NamePage = styled.h1`
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    color: #126BA5;
    padding-top: 40px;
    padding-bottom: 10px;
`
const Description = styled.h2`
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    color: #666666;
`