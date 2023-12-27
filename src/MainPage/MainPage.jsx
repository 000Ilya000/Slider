import React from 'react';
import Slider from './components/Slider/Slider';
import styled from 'styled-components';

function MainPage() {
    return (
        <Wrapper>
            <Slider>
                <Item1>First slide</Item1>
                <Item2>Second slide</Item2>
                <Item3>Third slide</Item3>
            </Slider>
        </Wrapper>
    );
}

export default MainPage;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Item1 = styled.div`
    display: flex;
    font-family: 'Inter', sans-serif;
    align-items: center;
    justify-content: center;
    user-select: none;
    background-color: aqua;
    color: #3c3939;
`

const Item2 = styled(Item1)`
    background-color: green;  
    color: #f1e0e0;
`

const Item3 = styled(Item2)`
    background-color: red;
`