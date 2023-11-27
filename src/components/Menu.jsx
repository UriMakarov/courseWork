import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { menuData } from "./data.js";
import folderOpenIcon from "../assets/Menu/folderOpen.svg";
import folderCloseIcon from "../assets/Menu/folderClose.svg";
import linkIcon from "../assets/Menu/link.svg";
import markIcon from "../assets/Menu/mark.svg";

const StyledMenu = styled.div`
background: inherit;
height:100vh;
padding-top: 30px;
color:var(--color-light-text);
font-size: 16px;
font-weight: 400;
`;

const searchInput = styled.input`
width: 320px;
height: 32px;
border-radius: 16px;
opacity: 0.1;
background: var(--color-light-text); 
`;

const StyledLink = styled.div`
  .linkImage{
  width: 16px;
  height: 16px;
  margin-right: 16px;

  }
  .markedImage{
    margin-right: 16px;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 16px;
  margin-right: 32px;
  margin-top: 9px;
  margin-bottom: 9px;
`;

const StyledFolder = styled.div`
  .folderImage{
    margin-right: 10px;
  }
    margin-left: 16px;
    margin-top: 9px;
    margin-bottom: 9px;

`;

const StyledNavLink = styled(NavLink)`
&:hover,
&:focus{
    color: blue;
}
&:active{
    color: red;
};
`;

const Collapsible = styled.div`
  height: ${p => (p.isOpen ? 'auto' : '0')};
  overflow: hidden;
`;

const Link = ({ name, marked, href, handler }) => {
  return (
    <StyledLink>
      <div>
        <img className="linkImage" src={linkIcon} alt="linkIcon" />
        <StyledNavLink to={href} onClick={handler}>
          {name}
        </StyledNavLink>
      </div>
      {marked && <img src={markIcon} className="markedImage" alt="markIcon" />}
    </StyledLink>
  );
};

const Folder = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledFolder>
      {(isOpen) ?
        (<img src={folderOpenIcon} className="folderImage" onClick={toggleOpen} alt="Open" />)
        : (<img src={folderCloseIcon} className="folderImage" onClick={toggleOpen} alt="Close" />)}
      <span>{name}</span>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </StyledFolder>
  );
};

const TreeRecursive = ({ data, handler }) => {
  return data.map(item => {
    if (item.type === 'link') {
      return <Link name={item.name} marked={item.marked} href={item.href} key={item.id} handler={handler} />;
    }
    if (item.type === 'folder') {
      return (
        <Folder name={item.name} key={item.id}>
          <TreeRecursive data={item.childrens} />
        </Folder>
      );
    }
  });
};


export const Menu = ({ handler }) => {
  return (
    <>
      <StyledMenu handler={handler}>
        {/* <form action="">
          <searchInput />
        </form> */}
        <TreeRecursive data={menuData} handler={handler} />
      </StyledMenu>
    </>
  );
};
