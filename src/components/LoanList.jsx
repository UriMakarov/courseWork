import { useData } from "../hooks/useData.js";
import filterIcon from "../assets/filter.svg";
import threeDotsIcon from "../assets/threeDots.svg";
import documentIcon from "../assets/document.svg";
import settingsIcon from "../assets/settings.svg";

export const LoanList = () => {
  const {data} = useData(10); 
  return (
    <div className="ml-[24px]">
      <div  className="flex flex-row  items-center bg-bg-white h-12 mt-[18px] 
          mr-[24px] rounded-lg font-roboto text-text font-medium text-[14px]">{/* grid header */}
        <div className="flex flex-row items-center w-[22%]">
          <p className="ml-[23px]">Дата</p>
          <img src={filterIcon} alt="filterIcon" className="ml-[4px]"/>
          <div className="h-12 w-[1px] bg-text bg-opacity-10 justify-self-end ml-auto" />
        </div>
        <div className="flex flex-row items-center w-[14%]">
          <p className="ml-[23px]">Номер</p>
          <img src={filterIcon} alt="filterIcon" className="ml-[4px]"/>          
          <div className="h-12 w-[1px] bg-text bg-opacity-10 justify-self-end ml-auto" />
        </div>
        <div className="flex flex-row items-center w-[13%]">
          <p className="ml-[23px]">Дата начала</p>
          <img src={filterIcon} alt="filterIcon" className="ml-[4px]"/>
          <div className="h-12 w-[1px] bg-text bg-opacity-10 justify-self-end ml-auto" />
        </div>
        <div className="flex flex-row items-center w-[15%]">
          <p className="ml-[23px]">Дата завершения</p>
          <img src={filterIcon} alt="filterIcon" className="ml-[4px]"/>
          <div className="h-12 w-[1px] bg-text bg-opacity-10 justify-self-end ml-auto" />
        </div>
        <div className="flex flex-row items-center w-[20%]">
          <p className="ml-[23px]">Заемщик</p>
          <img src={filterIcon} alt="filterIcon" className="ml-[4px]"/>
          <div className="h-12 w-[1px] bg-text bg-opacity-10 justify-self-end ml-auto" />
        </div>
        <div className="flex flex-row items-center justify-between w-[16%]">
          <div className="flex flex-row">
            <p className="ml-[23px]">Сумма</p>
            <img src={filterIcon} alt="filterIcon" className="ml-[4px]"/>
          </div>
          <img src={settingsIcon} alt="settingsIcon" className="mr-[16px]"/>
        </div>
      </div>
      <div>
        {/* grid */}
        {data?.map((row, index) => (
          <div
            key={index}
            className="flex flex-row items-center bg-white h-12  
          mr-[24px] rounded-lg font-roboto text-text text-[14px]">
            <div className="flex flex-row items-center w-[22%]">
            <img src={documentIcon} alt="documentIcon" className="ml-[16px] mr-[8px]"/>
              <p className="text-blue">{row.type}</p>
              <div className="h-12 w-[1px] bg-text bg-opacity-10 justify-self-end ml-auto" />
            </div>
            <div className="flex flex-row items-center w-[14%]">
              <p className="ml-[23px]">{row.number}</p>
              <div className="h-12 w-[1px] bg-text bg-opacity-10 justify-self-end ml-auto" />
            </div>
            <div className="flex flex-row items-center w-[13%]">
              <p className="ml-[23px]">{row.start}</p>
              <div className="h-12 w-[1px] bg-text bg-opacity-10 justify-self-end ml-auto" />
            </div>
            <div className="flex flex-row items-center w-[15%]">
              <p className="ml-[23px]">{row.end}</p>
              <div className="h-12 w-[1px] bg-text bg-opacity-10 justify-self-end ml-auto" />
            </div>
            <div className="flex flex-row items-center w-[20%]">
              <img src={documentIcon} alt="documentIcon" className="ml-[16px] mr-[8px]"/>
              <p className="text-blue">{row.borrower}</p>
              <div className="h-12 w-[1px] bg-text bg-opacity-10 justify-self-end ml-auto" />
            </div>

            <div className="flex flex-row justify-between items-center w-[16%]">
            <p className="ml-[23px]">{row.amount}</p>
            <img src={threeDotsIcon} alt="threeDotsIcon" className="mr-[16px]"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// TODO:
// - получить фейкером 100-200 записей
// - пагинация
// - сортировка
// - фильтрация