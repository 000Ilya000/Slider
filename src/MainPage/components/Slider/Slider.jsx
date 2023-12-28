import React, { useState, useEffect, Children, cloneElement } from 'react';
import styled from 'styled-components';
import left from '../../imgs/Left.png';
import right from '../../imgs/Right.png';
const PageWidth = 450;
const Slider = ({ children }) => {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);
    const handleOffsetChange = (newOffset) => {
        const maxOffset = -(PageWidth * (pages.length - 1));
        setOffset(Math.max(Math.min(newOffset, 0), maxOffset));
    };
    useEffect(() => {
        setPages(
            Children.map(children, (child) =>
                cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PageWidth}px`,
                        maxWidth: `${PageWidth}px`,
                    },
                })
            )
        );
    }, [children]);
    return (
        <MainContainer>
            <Arrow onClick={() => handleOffsetChange(offset + PageWidth)} direction="left" />
            <Window>
                <PagesContainer style={{ transform: `translateX(${offset}px)` }}>{pages}</PagesContainer>
            </Window>
            <Arrow onClick={() => handleOffsetChange(offset - PageWidth)} direction="right" />
        </MainContainer>
    );
};
const MainContainer = styled.div`
    height: 150px;
    width: 564px;
    display: flex;
    align-items: center;
    position: relative;
`;
const Window = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
`;
const PagesContainer = styled.div`
    height: 100%;
    display: flex;
    transition: transform 300ms ease-in-out;
    gap: 40px;
`;
const Arrow = styled.div`
    height: 40px;
    cursor: pointer;
    width: 40px;
    background: url(${(props) => (props.direction === 'left' ? left : right)});
    position: absolute;
    ${(props) => (props.direction === 'left' ? 'left: -60px; bottom: -60px;' : 'right: -60px; left: auto; bottom: -60px;')}
`;
export default Slider;