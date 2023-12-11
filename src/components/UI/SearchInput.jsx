/* eslint-disable react/prop-types */
// import styled from "styled-components";

// const StyledSearchInput = styled.input`
// width: 320px;
// height: 32px;
// border-radius: 16px;
// padding-left: 16px;
// background: rgba(255, 255, 255, 0.1); 
// color: var(--color-light-text);
// `;

export const SearchInput = ({ value, onChange, placeholder }) => {
    return (
        <input className="w-[320px] h-[32px] text-light-text rounded-[16px] bg-white bg-opacity-10 pl-[16px] border-none outline-none" 
        type="text" value={value} onChange={onChange} placeholder={placeholder} />
    )
}