import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { useState } from 'react';


const IconButtonContainer = styled.div`
width: 40px;
height: 40px;
border-radius: 8px;
background: ${(props) => (props.open ? ' white;' : 'inherit')}; 
`;
IconButtonContainer.propTypes = {
    open: PropTypes.bool,
}


const StyledCircle = styled.div`
border-radius: 8px;
background: var(--color-red);
width: 16px;
height: 16px;
position: relative;
top: -41px;
left: 22px;
display: flex;
justify-content: center;
align-items: center;
`;

const StyledNumber = styled.p`
color: white;
font-size: 10px;
font-weight: 700;
 `;



const StyledIconButton = styled.img`
margin:10px;
`;

export function IconButton({ img, open, onClick, num }) {
    return (
        <>
            <IconButtonContainer open={open} >
                <StyledIconButton src={img} onClick={onClick} />
                {(num !== 0) && (
                <StyledCircle>
                    <StyledNumber>{num}</StyledNumber>
                </StyledCircle>
                )}

            </IconButtonContainer>
        </>

    );
}
IconButton.propTypes = {
    img: PropTypes.any,
    open: PropTypes.bool,
    onClick: PropTypes.func,
    num: PropTypes.number
}


