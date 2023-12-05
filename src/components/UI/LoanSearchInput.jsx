/* eslint-disable react/prop-types */
import styled from "styled-components";
import discIcon from "../../assets/disc.svg";

const StyledLoanSearchInput = styled.input`
margin-left: 24px;
padding-left: 16px;
margin-right: 32px;
width: 247px;
height: 32px;
background: var(--color-bg-white); 
border-radius: 16px; 
color: var(--color-text);
font-size: 14px;
font-weight: 400;
line-height: 16px; 
opacity: 0.5;

`;

export const LoanSearchInput = ({ value, onChange, placeholder }) => {
    return (
        <>
            <img src={discIcon} alt="disc" />
            <StyledLoanSearchInput type="text" value={value} onChange={onChange} placeholder={placeholder} />
        </>

    )
}