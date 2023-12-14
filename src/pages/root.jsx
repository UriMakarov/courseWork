// import {LoanSearchInput} from "../components/UI/LoanSearchInput.jsx"
import { useState } from "react";
import { Wizard } from "../components/Wizard.jsx";
import dotIcon from "../assets/dot.svg"
import { LoanGrid } from "../components/LoanGrid.jsx";


export function Root() {
  const [selectedItemId, setSelectedItem] = useState();
  const [selectedSubItemId, setSelectedsubItem] = useState();



  return (
    <>
      <div className="flex flex-row basis-full max-h-[10%] border-b-2 border-lines-white justify-between"> {/* header */}
        <div className="ml-[24px]">
          <div className="flex fex-row  mt-[4%] mb-[4px] h-[14px] items-center">
            <p className="font-roboto text-[12px] leading-[14px] opacity-50">Договор или продукт</p>
            <img src={dotIcon} alt="dot" className="h-[3px] w-[3px] mx-[6px]" />
            <p className="font-roboto text-[12px] leading-[14px] opacity-50">Кредит</p>
          </div>
          <div>
          </div> <p className="font-roboto text-[24px] font-[300] text-blue ">Продукт: Равномерное распределение ОД</p>
        </div>
        <p className="self-center justify-self-end">Поиск</p>
      </div>

      <div className="flex flex-row h-[100%]">

        <div className="p-[24px]">
          <div className='h-[100%] w-[258px] rounded-xl bg-bg-white  self-start'>  {/* wizard container */}
            < Wizard selectedItemId={selectedItemId}
              selectedSubItemId={selectedSubItemId}
              setSelectedItem={setSelectedItem}
              setSelectedsubItem={setSelectedsubItem} />
          </div>
        </div>
        <div className="flex flex-col h-[100%] w-[100%]">
          <div className=" h-[90%] w-[100%]"> {/* grid */}
            <LoanGrid/>
          </div>
          <div className=" h-[10%] w-[100%] bg-slate-400">
            <p>Pagination</p>
          </div>

        </div>

      </div>

    </>

  );
}
