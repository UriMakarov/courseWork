/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { menuData } from "./menuData.js";
import folderOpenIcon from "../assets/Menu/folderOpen.svg";
import folderCloseIcon from "../assets/Menu/folderClose.svg";
import linkIcon from "../assets/Menu/link.svg";
import markIcon from "../assets/Menu/mark.svg";
import crossIcon from "../assets/Menu/cross.svg";
import { SearchInput } from "./UI/SearchInput.jsx";

const StyledMenu = styled.div`
background: inherit;
height:100vh;
padding-top: 30px;
color:var(--color-light-text);
font-size: 16px;
font-weight: 400;
`;

const StyledLink = styled(NavLink)`
&:focus,&:active{
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1); }

.linkImage{
  width: 16px;
  height: 16px;
  margin-right: 16px;
};
.markedImage{
    margin-right: 16px;
    justify-self: flex-end;
  };
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
  margin-right: 32px;
  padding-top: 9px;
  padding-bottom: 9px;
  width: 100%;
`;



const StyledSeatchContainer = styled.div`
display: flex;
`;

const StyledClearButton = styled.button`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3); 
  align-self: center;
  margin-left: -25px;
  cursor: pointer;
`;
const ClearButton = ({ onClick }) => {
  return (
    <StyledClearButton onClick={onClick}>
      <img src={crossIcon} alt="crossIcon" />
    </StyledClearButton>
  );
};

const Collapsible = styled.div`
  height: ${(props) => (props.isOpen ? 'auto' : '0')};
  overflow: hidden;
`;

const Link = ({ name, marked, href }) => {
  return (
    <StyledLink to={href} >
      <div className="flex flex-row items-center">
        <img className="linkImage" src={linkIcon} alt="linkIcon" />
        <p className="text-white font-roboto">{name}</p>
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
    <div className="ml-[16px] mt-[9px]">
      <div className="flex flex-row mb-[9px] text-white">
        {(isOpen) ?
          (<img src={folderOpenIcon} className="mr-[10px]" onClick={toggleOpen} alt="Open" />)
          : (<img src={folderCloseIcon} className="mr-[10px]" onClick={toggleOpen} alt="Close" />)}
        <span className="font-roboto">{name}</span>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </div>
  );
};

const MenuItem = ({ item, searchText }) => {
  if (item.type === 'folder') {
    return (
      <li>
        <Folder name={item.name} key={item.id}>
          <ul>
            {item.childrens.map((child) => (
              <MenuItem key={child.id} item={child} searchText={searchText} />
            ))}
          </ul>
        </Folder>
      </li>
    );
  } else if (item.type === 'link' && item.name.toLowerCase().includes(searchText.toLowerCase())) {
    return <Link name={item.name} marked={item.marked} href={item.href} key={item.id}/>;
  }
};

export const Menu = () => {
  const [searchText, setSearchText] = useState('');

  const searchInputChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
  };

  const searchInputClear = () => {
    setSearchText('');
  };
  return (
    <>
      <StyledMenu >
        <StyledSeatchContainer>
          <SearchInput value={searchText} onChange={searchInputChange} placeholder={"Найти"} />
          {searchText && <ClearButton onClick={searchInputClear} />}
        </StyledSeatchContainer>
        <ul>
          {menuData.map((item) => (
            <MenuItem key={item.id} item={item} searchText={searchText} />
          ))}
        </ul>
      </StyledMenu>
    </>
  );
};
