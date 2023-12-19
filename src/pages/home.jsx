import { LoanList } from "../components/LoanList.jsx";
import dotIcon from "../assets/dot.svg"
import { LoanSearchInput } from "../components/UI/LoanSearchInput.jsx";
import { Pagination } from "../components/UI/Pagination.jsx";

export function Home() {
  return (
    <>
      <div className="flex flex-row basis-full max-h-[10%] border-b-2 border-lines-white justify-between"> {/* header */}
        <div className="ml-[24px]">
          <div className="flex fex-row mt-[10%] mb-[4px] h-[14px] items-center">
            <p className="font-roboto text-[12px] leading-[14px] opacity-50 ">Договор или продукт</p>
            <img src={dotIcon} alt="dot" className="h-[3px] w-[3px] mx-[6px]" />
            <p className="font-roboto text-[12px] leading-[14px] opacity-50">Кредит</p>
          </div>
          <div>
          </div> <p className="font-roboto text-[24px] font-[300] text-blue ">Список</p>
        </div>
        <LoanSearchInput />
      </div>
      <div className="flex flex-col h-[100%] w-[100%]">
          <div className=" h-[90%] w-[100%]"> {/* grid */}
            <LoanList/>
          </div>
          <div className=" h-[10%] w-[100%]">{/* pagination */}
            <Pagination/>
          </div>

        </div>

    </>
  );
}
