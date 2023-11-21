import styled from 'styled-components';
export function Root() {
  const StyledRootDiv = styled.div`
  background: yellow;
  `;


  return (
    <>
      <StyledRootDiv>
        <h1>Root page</h1>
      </StyledRootDiv>
    </>
  );
}
