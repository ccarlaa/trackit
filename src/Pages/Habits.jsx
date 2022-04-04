import { useContext, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import NewCard from "../Components/NewCard";
import Card from "../Components/Card";
import { AddNewHabit, HabitsList, InfosLogin, NewRequisition } from "../Contexts";
import styled from 'styled-components';

export default function Habits() {
    const { setHabitsList } = useContext(HabitsList);
    const { addNewHabit, setAddNewHabit } = useContext(AddNewHabit);
    const { newRequisition } = useContext(NewRequisition);
    const { infosLogin } = useContext(InfosLogin);
    const { token } = infosLogin;

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {headers: {'Authorization': `Bearer ${token}`}});
        promisse.then((answer) => {
            setHabitsList(answer.data);
        });
        promisse.catch((warning) => console.log(warning.response));
    }, [newRequisition]);

    function AddCard() {
        if(addNewHabit === true){
            return (
                <NewCard />
            )
        }else{
            return (
                <></>
            )
        }
    }
    function WhatToShow() {
        if(setHabitsList.length !== 0){
            return (
                <Card />
            )
        }else{
            return (
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            )
        }
    }

    return (
        <>
            <Header />
            <Footer />
            <Container>
                <Center>
                    <AddHabit>
                        <p>Meus hábitos</p>
                        <Icon>
                            <ion-icon name="add-outline" onClick={() => setAddNewHabit(true)}></ion-icon>
                        </Icon>
                    </AddHabit>
                    <AddCard />
                    <NewHabits>
                        <WhatToShow />
                    </NewHabits>
                </Center>
            </Container>
        </>
    )
}   

const Container = styled.div`
    width: 100%;
    height: 100%;
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
const AddHabit = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    font-size: 23px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    color: #126BA5;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Icon = styled.div`
    width: 12%;
    height: 55%;
    background-color: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 30px;
    color: white
`
const NewHabits = styled.div`
    width: 100%;
    height: auto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: #666666;
    padding-bottom: 40px;
`