/* eslint-disable react/prop-types */
export const Status = ({ status }) => {
  return (
    <>
      {status && (
        <div className="w-[72px] h-[24px] bg-green rounded-[12px] flex justify-center items-center py-[5px] ml-[23px]">
          <p className="text-roboto text-white text-[12px] my-[5px]">Активно</p>
        </div>
      )}

      {!status && (
        <div className="w-[89px] h-[24px] bg-red rounded-[12px] flex justify-center items-center py-[5px] ml-[23px]">
          <p className="text-roboto text-white text-[12px] my-[5px]"> Не активно </p>
        </div>
      )}
    </>
  );
};
