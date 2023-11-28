import styled from 'styled-components';
import dotIcon from "../assets/dot.svg"

const StyledRootDiv = styled.div`

`;
const StyledHeader = styled.div`
display: flex;
flex-direction: row;
border-bottom: 2px solid var(--color-lines-white);
`;

const StyledLeftHeader = styled.div`
margin-left: 24px;
`;

const StyleRightHeader = styled.div`
flex-grow:1;
display: flex;
justify-content: end;
align-items: center;

`;
const StyledTitle = styled.h3`
margin-top: 24px;
margin-bottom: 4px;
color: var(--color-text);
font-size: 12px;
font-weight: 400;
line-height: 14px; 
opacity: 0.5;

`;

const StyledSubTitle = styled.h1`
  color: var(--color-blue);
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 24px;
`;
const StyledDotIcon = styled.img`
  margin-left: 6px;
  margin-right: 6px;
`;



export function Root() {
  return (
    <>
      <StyledRootDiv>
        <StyledHeader>
          <StyledLeftHeader>
            <StyledTitle>
              Договор или продукт
              <StyledDotIcon src={dotIcon} alt='dot' />
              Кредит
            </StyledTitle>
            <StyledSubTitle>
              Продукт: Равномерное распределение ОД
            </StyledSubTitle>
          </StyledLeftHeader>
          <StyleRightHeader>
            Найти
          </StyleRightHeader>
        </StyledHeader>
        




      </StyledRootDiv>
    </>
  );
}
