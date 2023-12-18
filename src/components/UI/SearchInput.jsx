/* eslint-disable react/prop-types */

export const SearchInput = ({ value, onChange, placeholder }) => {
    return (
        <input className="w-[320px] h-[32px] text-light-text rounded-[16px] bg-white bg-opacity-10 pl-[16px] border-none outline-none" 
        type="text" value={value} onChange={onChange} placeholder={placeholder} />
    )
}