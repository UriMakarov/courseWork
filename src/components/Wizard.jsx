/* eslint-disable react/prop-types */
import { wizardData } from "./wizardData.js";
import { RedCircle } from "./UI/Redcircle.jsx";
import downIcon from "../assets/triangledown.svg";



const WizardItem = ({ item, selectedItemId, selectedSubItemId, setSelectedItem, setSelectedsubItem  }) => {
    const sel = selectedItemId === item.id;
    return (
        <>
            <li onClick={() => setSelectedItem(item.id)} className=''>
                <div className="flex flex-row items-center justify-between cursor-pointer">
                    <div className="flex flex-row items-center">
                        <div className={`flex justify-center items-center w-6 h-6 rounded-md ml-6 mr-2 ${sel ? 'bg-blue' : ' bg-text bg-opacity-10 '}`}>
                            <p className={`font-roboto text-[12px]] font-bold ${sel ? 'text-white' : 'text-text'}`}>{item.num}</p>
                        </div>
                        <p className={`font-roboto text-[12px] font-bold  ${sel ? 'text-blue' : 'text-text'}`}>{item.name}</p>
                        {sel && <RedCircle num={item.childrens.length} />}
                    </div>
                    {sel && <img src={downIcon} alt="downIcon" className="justify-self-end mr-6" onClick={()=> setSelectedItem(0)}/>}
                </div>
                {(!item.last && !sel) && <div className="w-[2px] h-2 ml-[36px] my-2 bg-text bg-opacity-20" />}
                {sel && <WizardSubItem item={item} selectedSubItemId={selectedSubItemId} setSelectedsubItem={setSelectedsubItem} />}
            </li>
        </>
    )
}

const WizardSubItem = ({ item, selectedSubItemId, setSelectedsubItem }) => {
    return (
        <>
            <div className="flex flex-row">
                <div className="bg-gradient-to-b from-blue to-light-blue ml-[36px] w-[2px] my-2" />
                <div>
                    <ul className="gap-[13px]">
                        {item.childrens.map((child) => (
                            <li key={child.id} onClick={() => setSelectedsubItem(child.id)} className='mb-3 mt-3' >
                                <p className={`font-roboto text-[12px] ml-[19px] mr-[24px] cursor-pointer
                                ${(selectedSubItemId === child.id) ? 'text-blue' : 'text-text opacity-50'} `}>{child.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export const Wizard = ({ selectedItemId, selectedSubItemId, setSelectedItem, setSelectedsubItem }) => {
    return (
        <div>
            <ul className="pt-6">
                {wizardData.map((item) => (
                    <WizardItem key={item.id}
                        item={item}
                        selectedItemId={selectedItemId}
                        selectedSubItemId={selectedSubItemId}
                        setSelectedItem={setSelectedItem}
                        setSelectedsubItem={setSelectedsubItem} />
                ))}
            </ul>
        </div>
    );
};