import { useContext, useEffect } from 'react';
import { HabitsToday, InfosLogin, NewRequisition, Score } from '../Contexts';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import CardToday from '../Components/CardToday';
import styled from 'styled-components';

export default function Today() {
    let counter = 0;
    let percentage = 0;
    let counterZero = 0;

    const { habitsToday, setHabitsToday } = useContext(HabitsToday);
    const { setScore } = useContext(Score);
    const { newRequisition } = useContext(NewRequisition);
    const { infosLogin } = useContext(InfosLogin);
    console.log(infosLogin);
    const { token } = infosLogin;
    console.log(token);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {headers: {'Authorization': `Bearer ${token}`}});
        promisse.then((answer) => {
            setHabitsToday(answer.data);
        });
        promisse.catch((warning) => console.log(warning.response));
    }, [newRequisition]);

    const dayjs = require('dayjs');
    dayjs.locale('br');
    let now = dayjs();
    let today = new Date((now.format('dddd, MM/DD')))
    const option = {
        month: 'numeric',
        weekday: 'long',
        day: 'numeric',
    }
    let dayTranslate = (today.toLocaleDateString('pt-br',option));
    let removeFeira = dayTranslate.replace('-feira','');
    let renderDay = removeFeira[0].toUpperCase() + removeFeira.substr(1);

    for(let x = 0; x < habitsToday.length; x++){
        if(habitsToday[x].done === true){
            counter++;
            percentage = Math.round((counter/(habitsToday.length)*100));
            setScore(percentage);
        }else{
            counterZero++;
        }if(counterZero === habitsToday.length){
            setScore(0);
        }
    }

    return (
        <>
            <Header />
            <Footer />
            <Container>
                <Center>
                    <Title>
                        <Day>{renderDay}</Day>
                        <Number>{percentage}% dos hábitos concluídos</Number>
                    </Title>
                    <Habits>
                        <CardToday />
                    </Habits>
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
const Day = styled.h1`
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    color: #126BA5;
`
const Number = styled.h2`
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    color: #BABABA;
`
const Habits = styled.div`
    width: 100%;
    height: 100%;
`