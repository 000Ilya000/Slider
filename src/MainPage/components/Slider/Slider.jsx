import React, { useState, useEffect, Children, cloneElement } from 'react';
import styled from 'styled-components';
import leftArrow from '../../imgs/Left.png';
import rightArrow from '../../imgs/Right.png';
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
                        // minWidth: `${PageWidth}px`,
                        // maxWidth: `${PageWidth}px`,
                    },
                })
            )
        );
    }, [children]);
    return (
        <MainContainer>
            <Arrows>
                <Arrow onClick={() => handleOffsetChange(offset + PageWidth)} direction="left" />
                <Arrow onClick={() => handleOffsetChange(offset - PageWidth)} direction="right" />
            </Arrows>
            <Window>
                <PagesContainer style={{ transform: `translateX(${offset}px)` }}>{pages}</PagesContainer>
            </Window>
        </MainContainer>
    );
};
const MainContainer = styled.div`
  height: 402px;
  width: -webkit-fill-available;
  display: flex;
  align-items: center;
  position: relative;
`;
const Arrows = styled.div`
  display: flex;
  gap: 16px;
  position: absolute;
  top: -181px;
  right: 120px;
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
  background: url(${(props) => (props.direction === 'left' ? leftArrow : rightArrow)});
`;
export default Slider;