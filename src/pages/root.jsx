// import {LoanSearchInput} from "../components/UI/LoanSearchInput.jsx"
import dotIcon from "../assets/dot.svg"

// const StyledRootDiv = styled.div`

// `;
// const StyledHeader = styled.div`
// display: flex;
// flex-direction: row;
// border-bottom: 2px solid var(--color-lines-white);
// `;

// const StyledLeftHeader = styled.div`
// margin-left: 24px;
// `;

// const StyleRightHeader = styled.div`
// flex-grow:1;
// display: flex;
// justify-content: end;
// align-items: center;

// `;
// const StyledTitle = styled.h3`
// margin-top: 24px;
// margin-bottom: 4px;
// color: var(--color-text);
// font-size: 12px;
// font-weight: 400;
// line-height: 14px; 
// opacity: 0.5;

// `;

// const StyledSubTitle = styled.h1`
//   color: var(--color-blue);
//   font-size: 24px;
//   font-weight: 300;
//   margin-bottom: 24px;
// `;
// const StyledDotIcon = styled.img`
//   margin-left: 6px;
//   margin-right: 6px;
// `;



export function Root() {
  return (
    <>
      <div className="flex basis-full flex-row h-[94px] border-b-2 border-lines-white justify-between">
        <div className="ml-[24px]">
          <div className="flex fex-row  mt-[24px] mb-[4px] h-[14px] items-center">
            <p className="font-roboto text-[12px] leading-[14px] opacity-50">Договор или продукт</p>
            <img src={dotIcon} alt="dot" className="h-[3px] w-[3px] mx-[6px]" />
            <p className="font-roboto text-[12px] leading-[14px] opacity-50">Кредит</p>
          </div>
          <div>
          </div>
          <p className="font-roboto text-[24px] font-[300] text-blue ">Продукт: Равномерное распределение ОД</p>

        </div>

        <p className="self-center justify-self-end">Поиск</p>
      </div>
    </>
  );
}
