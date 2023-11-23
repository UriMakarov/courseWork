import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IconButton } from './UI/IconButton';
import colvirIcon from "../assets/Colvir.svg";
import folderIcon from "../assets/folder.svg";
import burgerCloseIcon from "../assets/burgerClose.svg";
import burgerOpenIcon from "../assets/burgerOpen.svg";

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
gap: 32px;
`;

const StyledIcon = styled.img`
margin: 20px;  
width: 26px;
height: 26px; 
`;

export const Sidebar = ({ open, handler }) => {
    const burgerIcon = open ? burgerOpenIcon : burgerCloseIcon;
    const num=7
    return (
        <>
            <StyledSideBar open={open}>
                <StyledColvirIcon src={colvirIcon} alt='Colvir' />
                <StyledButtonPanel>
                    <IconButton img={burgerIcon} open={open}  onClick={handler}  num={num} />
                
                    <StyledIcon src={folderIcon} onClick={handler} alt="burgerIcon" num={num} />
                </StyledButtonPanel>
            </StyledSideBar>
        </>
    )
}
Sidebar.propTypes = {
    open: PropTypes.bool,
    handler: PropTypes.func,
}