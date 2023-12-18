import { useState } from "react";
import discIcon from "../../assets/disc.svg";
import crossIcon from "../../assets/cross.svg";
export const LoanSearchInput = () => {
  const [searchText, setSearchText] = useState("");

  const searchInputChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
  };

  const searchInputClear = () => {
    setSearchText("");
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <img src={discIcon} alt="disc" className="mr-[24px]" />
      <input
        className="h-[32px] text-text rounded-[16px] bg-bg-white opacity-50 pl-[16px] border-none outline-none"
        type="text"
        onChange={searchInputChange}
        value={searchText}
        placeholder="Найти"
      />
      <div className="w-[1px] h-[16px] mx-[16px] bg-[#D9D9D9]" />
      <img
        src={crossIcon}
        alt="cross"
        onClick={searchInputClear}
        className="mr-[24px] cursor-pointer"
      />
    </div>
  );
};
