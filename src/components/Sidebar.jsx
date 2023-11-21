import styled from 'styled-components';
import folderIcon from "../assets/folder.svg";

const StyledSideBar = styled.div`
// margin: ${(props) => (props.open ? '0px;' : '8px;')}; 
// position: fixed;
// left: 0;
// top: 0;
// height: ${(props) => (props.open ? '100%' : '98%')}; 
// width: ${(props) => (props.open ? '100vw' : '72px')}; 
// border-radius:${(props) => (props.open ? '0px;' : '12px;')}; 
// background: linear-gradient(180deg, var(--color-blue) 0%, var(--color-light-blue) 100%);
// display: flex;
// flex-direction: row;
`;

const StyledIcon = styled.img`
margin: 20px;  
width: 26px;
height: 26px; 
`;
export const Sidebar = (props) => {
    return (
        <>
            <StyledSideBar>
                <StyledIcon src={folderIcon} onClick={props.handler} alt="burgerIcon" />
            </StyledSideBar>
        </>
    )
}