import { useState, useContext } from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import NewCard from "../Components/NewCard";
import {AddNewHabit} from "../Contexts"

import styled from 'styled-components';

export default function Habits() {
    const {addNewHabit, setAddNewHabit} = useContext(AddNewHabit)

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
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    </NewHabits>
                </Center>
            </Container>
        </>
    )
}   

const Container = styled.div`
    width: 100vw;
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
    padding-top: 20px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: #666666;
`