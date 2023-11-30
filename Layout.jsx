import { useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./src/components/Sidebar";
import { Menu } from "./src/components/Menu";


const StyledLayout = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    180deg,
    var(--color-blue) 0%,
    var(--color-light-blue) 100%
  );  
`;

const SidebarContainer = styled.div`
  background: inherit;
  margin: ${(props) => (props.open ? "0px;" : "8px;")};
  position: ${(props) => (props.open ? "relative;" : "fixed;")};
  left: 0;
  top: 0;
  height: ${(props) => (props.open ? "100%" : "98%")};
  width: ${(props) => (props.open ? "448px" : "72px")};
  border-radius: ${(props) => (props.open ? "0px;" : "12px;")};

  display: flex;
  flex-direction: row;
`;

const ButtonPanelContainer = styled.div`
  border-radius: ${(props) => (props.open ? "0px;" : "12px;")};
  background: inherit;
  width: 72px;
  display:flex;
  flex-direction: column;
  height:100%;

`;

const MenuContainer = styled.div`
  background: inherit;
  display:${(props) => (props.open ? "block;" : "none;")};
  width: 400px;
  height:100vh;

`;

const FormContainer = styled.div`
background:white;
flex-grow:1;
border-radius:${(props) => (props.open ? '21.6px 0px 0px 21.6px;' : '0;')}; 
margin-top: ${(props) => (props.open ? '45px' : '0px;')};
margin-bottom: ${(props) => (props.open ? '45px' : '0px;')};
@media (min-width: 1440px) {
  margin-top:0px;
  margin-bottom: 0px;
  }
padding-left: ${(props) => (props.open ? '0px' : '80px;')};
`;

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function SidebarOpenHandler() {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <>
      <StyledLayout>
        <SidebarContainer open={sidebarOpen}>
          <ButtonPanelContainer open={sidebarOpen}>
            <Sidebar open={sidebarOpen} handler={SidebarOpenHandler} />
          </ButtonPanelContainer>
          <MenuContainer open={sidebarOpen}>
            <Menu />
          </MenuContainer>
        </SidebarContainer>
        <FormContainer open={sidebarOpen}>
          <Outlet />
        </FormContainer>
      </StyledLayout>
    </>
  );
}
