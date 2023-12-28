import React from 'react';
import styled from 'styled-components';

function PortfolioItem(props) {
    return (
        <MainBlock href={props.link}>
            <Picture {...props} />
            <DescrBlock>
                <Title>{props.title}</Title>
                <StackLink>
                    <Stack>
                        {props.stack.map((item, index) => (
                            <StackName key={index}>
                                {item.title}
                            </StackName>
                        ))}
                    </Stack>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 16H17C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8H15M8 12H16M9 8H7C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16H9" stroke="#656D72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </StackLink>
            </DescrBlock>
        </MainBlock>
    );
}

export default PortfolioItem;

const MainBlock = styled.a`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    text-decoration: none;
    &:hover {
        >div:first-child {
            background-color: initial;
        }
        >div:last-child > div:last-child > div:first-child {
            background: #EEEDFA !important;
            p {
                color: #232E35;
            }
        }
    }
    border: 1px solid #F5F5F5;
`

const Picture = styled.div`
    background: url(${( props ) => props.img});
    background-blend-mode: overlay;
    transition: 300ms;
    background-color: rgb(104 104 104);
    background-size: cover;
    height: 295px;
    border-radius: 8px 8px 0px 0px;
    width: ${( props ) => props.width};
`;

const DescrBlock = styled.div`
    padding: 24px;
    border-radius: 0px 0px 8px 8px;
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 16px;
`

const Title = styled.p`
    color: #232E35;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 500;
`

const StackLink = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    >div:last-child {
        height: 24px;
    }
`

const Stack = styled.div`
    display: inline-flex;
    padding: 4px 8px;
    align-items: flex-start;
    gap: 10px;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #F1F1F1;  
    transition: 300ms;
`

const StackName = styled.p`
    color: #656D72;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 500;
    transition: 300ms;
`