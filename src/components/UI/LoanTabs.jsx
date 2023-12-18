import { useState } from "react";

export const LoanTabs = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="font-roboto flex gap-[8px]">
      <button
        className={`px-[16px] py-[6px] ${
          openTab === 1
            ? "rounded-[6px] bg-blue text-white "
            : "bg-bg-white text-text"
        }`}
        onClick={() => setOpenTab(1)}
      >
        Информация
      </button>
      <button
        className={`font-roboto px-[16px] py-[6px] ${
          openTab === 2
            ? "rounded-[6px] bg-blue text-white "
            : "bg-bg-white text-text"
        }`}
        onClick={() => setOpenTab(2)}
      >
        Атрибуты(3)
      </button>
      <button
        className={`font-roboto px-[16px] py-[6px] ${
          openTab === 3
            ? "rounded-[6px] bg-blue text-white "
            : "bg-bg-white text-text"
        }`}
        onClick={() => setOpenTab(3)}
      >
        Детали
      </button>
    </div>
  );
};
