import React from 'react';
import Slider from './components/Slider/Slider';
import styled from 'styled-components';
import PortfolioItem from './components/PortfolioItem/PortfolioItem';
import slide1 from './imgs/slide1Img.png';
import slide2 from './imgs/slide2Img.png';
import slide3 from './imgs/slide3Img.png';

function MainPage() {
    const item1Stack = [{ title: 'React' }]
    const item2Stack = [{ title: 'JS' }, { title: 'HTML5' }, { title: 'CSS3' },]
    const item3Stack = [{ title: 'React' }, { title: 'JSX' }, { title: 'Redux' },]
    return (
        <Wrapper>
            <div>
                <SubTitle>MY WORKS</SubTitle>
                <Title>Featured Portfolios</Title>
            </div>
            <Slider>
                <PortfolioItem link={'https://steiza.com/'} img={slide1} width={'720px'} stack={item1Stack} title={'STEIZA - company website'} />
                <PortfolioItem link={'https://000ilya000.github.io/_STEIZA-test-dashboard_/pages/registration'} img={slide2} width={'400px'} stack={item2Stack} title={'Dashboard'} />
                <PortfolioItem link={'https://vk.com/lk0022'} img={slide3} width={'400px'} stack={item3Stack} title={'My website'} />

                {/* <Item1>First slide</Item1>
                <Item2>Second slide</Item2>
                <Item3>Third slide</Item3> */}
            </Slider>
        </Wrapper>
    );
}

export default MainPage;

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    padding-left: 120px;
    gap: 130px;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`

const SubTitle = styled.p`
    color: #656D72;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 7.5px;
    display: flex;
    align-items: center;
    gap: 16px;
    &::before {
        height: 2px;
        width: 16px;
        background: var(--Light-4, #D9D9D9);
        content: '';
        display: block;
    }
`

const Title = styled.p`
    color: var(--Cinder, #232E35);
    font-family: 'Inter', sans-serif;
    font-size: 36px;
    font-weight: 700;
`

// const Item1 = styled.div`
//     display: flex;
//     font-family: 'Inter', sans-serif;
//     align-items: center;
//     justify-content: center;
//     user-select: none;
//     background-color: aqua;
//     color: #3c3939;
// `

// const Item2 = styled(Item1)`
//     background-color: green;  
//     color: #f1e0e0;
// `

// const Item3 = styled(Item2)`
//     background-color: red;
// `