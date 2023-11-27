import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from './UI/IconButton';

import colvirIcon from "../assets/colvir.svg";
import burgerCloseIcon from "../assets/burgerClose.svg";
import burgerOpenIcon from "../assets/burgerOpen.svg";
import folderIcon from "../assets/folder.svg";
import listIcon from "../assets/list.svg";
import bellIcon from "../assets/bell.svg";
import userIcon from "../assets/user.svg";

const StyledSideBar = styled.div`
height:100%;
display: flex;
flex-direction: column;
`;

const StyledColvirIcon = styled.img`
margin: 20px;  
width: 32px;
height: 32px; 
`;

const StyledButtonPanel = styled.div`
width: 72px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

margin-top: auto;
margin-bottom: auto;
gap: 22px;
`;

const StyledUserContainer = styled.div`
width: 40px;
height: 40px;
border-radius: 8px;
background: var(--color-icon-bg);
margin-bottom:16px;
margin-left: 16px;
display: flex;
justify-content: center;
align-items: center;
`
const StyledUserIcon = styled.img`
margin: 20px;  
width: 26px;
height: 26px; 
`;

export const Sidebar = ({ open, handler }) => {
    const burgerIcon = open ? burgerOpenIcon : burgerCloseIcon;
    const [numFolder, setnumFolder] = useState(7);
    const [numList, setnumList] = useState(8);
    const [numBell, setnumBell] = useState(99);

    return (
        <>
            <StyledSideBar open={open}>
                <StyledColvirIcon src={colvirIcon} alt='Colvir' />
                <StyledButtonPanel>
                    <IconButton img={burgerIcon} open={open} onClick={handler} alt='burgerIcon' />
                    <IconButton img={folderIcon} num={numFolder} alt='folderIcon' />
                    <IconButton img={listIcon} num={numList} alt='listIcom' />
                    <IconButton img={bellIcon} num={numBell} alt="bellIcon" />
                </StyledButtonPanel>
                <StyledUserContainer>
                    <StyledUserIcon src={userIcon} alt='User' />
                </StyledUserContainer>

            </StyledSideBar>
        </>
    )
}
Sidebar.propTypes = {
    open: PropTypes.bool,
    handler: PropTypes.func,
}