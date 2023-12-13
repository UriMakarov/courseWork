/* eslint-disable react/prop-types */
export const RedCircle = ({ num }) => {
    return (
        <>
            <div className="w-[16px] h-[16px] bg-red rounded-[50%] flex justify-center items-center ml-2">
                <p className="font-roboto text-white text-[10px] font-bold"> {num}</p>


            </div>
        </>
    )
}