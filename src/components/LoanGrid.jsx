import { LoanTabs } from "./UI/LoanTabs.jsx";
import { CheckBox } from "./UI/CheckBox.jsx";
import { Status } from "./UI/Status.jsx";
import { useData } from "../hooks/useData.js";
import threeDotsIcon from "../assets/threeDots.svg";

  
export const LoanGrid = () => {
  const { data } = useData(6); 
  return (
    <>
      <div className="flex justify-between items-center">
        {" "}
        {/* grid title + tabs */}
        <p className="font-roboto text-[20px] text-text mt-[29px]">
          Расчет графика кредита с равномерным распределением ОД
        </p>
        <div className="mr-6 mt-6">
          <LoanTabs />{" "}
        </div>
      </div>
      <div
        className="flex flex-row  items-center bg-bg-white h-12 mt-[18px] 
          mr-[24px] rounded-lg font-roboto text-text font-medium text-[14px]"
      >
        {" "}
        {/* grid header */}
        <div className="flex flex-row items-center w-[29%]">
          <CheckBox pressed={false} />
          <p>Дата</p>
          <div className="h-12 w-[1px] bg-text bg-opacity-10 justify-self-end ml-auto" />
        </div>
        <div className="flex flex-row items-center w-[33%]">
          <p className="ml-[23px]">IP</p>
          <div className="h-12 w-[1px] bg-text bg-opacity-10 justify-self-end ml-auto" />
        </div>
        <div className="flex flex-row items-center w-[21%]">
          <p className="ml-[23px]">Порт</p>
          <div className="h-12 w-[1px] bg-text bg-opacity-10 justify-self-end ml-auto" />
        </div>
        <div className="flex flex-row items-center w-[17%]">
          <p className="ml-[23px]">Статус</p>
        </div>
      </div>
      <div>
        {/* grid */}
        {data?.map((row, index) => (
          <div
            key={index}
            className="flex flex-row  items-center bg-white h-12  
          mr-[24px] rounded-lg font-roboto text-text font-medium text-[14px]"
          >
            <div className="flex flex-row items-center w-[29%]">
              <CheckBox pressed={false} />
              <p>{row.date}</p>
              <div className="h-12 w-[1px] bg-text bg-opacity-10 justify-self-end ml-auto" />
            </div>

            <div className="flex flex-row items-center w-[33%]">
              <p className="ml-[23px]">{row.ip}</p>
              <div className="h-12 w-[1px] bg-text bg-opacity-10 justify-self-end ml-auto" />
            </div>
            <div className="flex flex-row items-center w-[21%]">
              <p className="ml-[23px]">{row.port}</p>
              <div className="h-12 w-[1px] bg-text bg-opacity-10 justify-self-end ml-auto" />
            </div>
            <div className="flex flex-row justify-between items-center w-[17%]">
              <Status status={row.status} />
              <img src={threeDotsIcon} alt="threeDotsIcon" className="mr-[16px]"/>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
