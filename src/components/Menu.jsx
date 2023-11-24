import styled from "styled-components";
import { menuData } from "./data";

const StyledMenu = styled.div`
background: inherit;
height:100vh;
`;
const Link = ({ name }) => {
  return (
    <span>{name}</span>

  );
};

const Folder = ({ name, children }) => {
  return (
      <div>
        <span>{name}</span>
      <div>{children}</div>
      </div>
  );
};
const TreeRecursive = ({ data }) => {
  // loop through the data
  return data.map(item => {
    // if its a file render <File />
    if (item.type === 'link') {
      return <Link name={item.name} />;
    }
    // if its a folder render <Folder />
    if (item.type === 'folder') {
      return (
        <Folder name={item.name}>
          <TreeRecursive data={item.childrens} />
        </Folder>
      );
    }
  });
};


export const Menu = () => {
  return (
    <>
      <StyledMenu>
        <h1>Menu</h1>
        <TreeRecursive data={menuData} />
      </StyledMenu>
    </>
  );
};
