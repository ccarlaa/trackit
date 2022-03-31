import styled from 'styled-components';

import LogoName from "../Images/LogoName.png";

export default function Header() {
    return (
        <HeaderApp >
            <HeaderCenter>
                <Logo src={LogoName} alt=""/>
                <UserPhoto src={LogoName} alt=""/> 
            </HeaderCenter>
        </HeaderApp>
    )
}

const HeaderApp = styled.header`
    width: 100%;
    height: 80px;
    background-color: #126BA5;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`
const HeaderCenter = styled.div`
    width: 95%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.img`
    width: 30%;
    height: auto;
`
const UserPhoto = styled.img`
    width: 17%;
    height: 95%;
    background-color: orange;
    border-radius: 50%;

`
