import firstIcon from "../../assets/Pagination/first.svg"
import nextIcon from "../../assets/Pagination/next.svg"
import prevIcon from "../../assets/Pagination/prev.svg"
import lastIcon from "../../assets/Pagination/last.svg"

export const Pagination = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center font-roboto text-[14px] text-text opacity-50">
        <p className="ml-[24px] mr-[8px]">Объектов на странице</p>
        <select
          name="selectedCount"
          defaultValue="100"
          className="w-[72px] h-[32px] rounded-[8px] bg-white  px-[12px] border ">
          <option value="1">1</option>
          <option value="10">10</option>
          <option value="100">100</option>
        </select>
      </div>

      <div className="flex flex-row justify-center items-center mr-[32px]">
        <div className="mr-[22px]"> <img src={firstIcon} alt="firstIcon" /> </div>
        <div className="mr-[22px]"> <img src={prevIcon} alt="prevIcon" />   </div>

        <div className="w-[32px] h-[32px] rounded-[8px] bg-blue mr-[22px] flex justify-center items-center text-white font-roboto font-bold"> <p>1</p> </div>
        <div className="w-[32px] h-[32px] mr-[22px] flex justify-center items-center font-roboto font-bold text-text opacity-30"> <p>2</p> </div>
        <div className="w-[32px] h-[32px] mr-[22px] flex justify-center items-center font-roboto font-bold text-text opacity-30"> <p>3</p> </div>
        <div className="w-[32px] h-[32px] mr-[22px] flex justify-center items-center font-roboto font-bold text-text opacity-30"> <p>...</p> </div>
        <div className="w-[32px] h-[32px] mr-[22px] flex justify-center items-center font-roboto font-bold text-text opacity-30"> <p>16</p> </div>

        <div className="mr-[22px]"> <img src={nextIcon} alt="nextIcon" /> </div>
        <div className="mr-[22px]"> <img src={lastIcon} alt="lastIcon" /> </div>

      </div>
    </div>
  );
};
