/* eslint-disable react/prop-types */
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

// const searchInput = styled.input`
// width: 320px;
// height: 32px;
// border-radius: 16px;
// opacity: 0.1;
// background: var(--color-light-text); 
// `;

const StyledLink = styled(NavLink)`
&:hover{
/* color: blue; */
}
&:focus{
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1); }
&:active{
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1); 
};
.active{
  color: green;
}



.linkImage{
  width: 16px;
  height: 16px;
  margin-right: 16px;

};
.markedImage{
    margin-right: 16px;
  };
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
  margin-right: 32px;
  padding-top: 9px;
  padding-bottom: 9px;

`;

const StyledFolder = styled.div`
  .folderImage{
    margin-right: 10px;
  }
  .folderName{
    margin-bottom: 9px;
  }
    margin-left: 16px;
    margin-top: 9px;
    margin-bottom: 9px;

`;


const Collapsible = styled.div`
  height: ${p => (p.isOpen ? 'auto' : '0')};
  overflow: hidden;
`;


const Link = ({ name, marked, href }) => {
  return (
    <StyledLink to={href} >
      <div>
        <img className="linkImage" src={linkIcon} alt="linkIcon" />
        {name}
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
      <div className = "folderName">
      {(isOpen) ?
        (<img src={folderOpenIcon} className="folderImage" onClick={toggleOpen} alt="Open" />)
        : (<img src={folderCloseIcon} className="folderImage" onClick={toggleOpen} alt="Close" />)}
      <span>{name}</span>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </StyledFolder>
  );
};

const TreeRecursive = ({ data }) => {
  return data.map(item => {
    if (item.type === 'link') {
      return <Link name={item.name} marked={item.marked} href={item.href} key={item.id} />;
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


export const Menu = () => {
  return (
    <>
      <StyledMenu >
        <TreeRecursive data={menuData}  />
      </StyledMenu>
    </>
  );
};
