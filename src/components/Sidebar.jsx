import { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from './UI/IconButton';

import colvirIcon from "../assets/colvir.svg";
import burgerCloseIcon from "../assets/burgerClose.svg";
import burgerOpenIcon from "../assets/burgerOpen.svg";
import folderIcon from "../assets/folder.svg";
import listIcon from "../assets/list.svg";
import bellIcon from "../assets/bell.svg";
import userIcon from "../assets/user.svg";

export const Sidebar = ({ open, handler }) => {
    const burgerIcon = open ? burgerOpenIcon : burgerCloseIcon;
    const [numFolder,] = useState(7);
    const [numList,] = useState(8);
    const [numBell,] = useState(99);
    return (
        <>
            <div className={'h-full flex flex-col'}> {/* sidebar with buttons */}
                <img className='m-[20px] w-[32px] h-[32px]' src={colvirIcon} alt='Colvir icon' />
                <div className='w-[72px] flex flex-col gap-[22px] my-auto justify-center items-center'> {/* panel wih 4 buttons */}
                    <IconButton img={burgerIcon} open={open} onClick={handler} alt='burgerIcon' />
                    <IconButton img={folderIcon} num={numFolder} alt='folderIcon' />
                    <IconButton img={listIcon} num={numList} alt='listIcom' />
                    <IconButton img={bellIcon} num={numBell} alt="bellIcon" />
                </div>{/* <UserContainer> */}
                <div className='bg-icon-bg h-[40px] w-[40px] self-center flex items-center justify-center rounded-[8px] m-[16px]'>
                    <img src={userIcon} alt='User' />
                </div>
            </div>
        </>
    )
}

Sidebar.propTypes = {
    open: PropTypes.bool,
    handler: PropTypes.func,
}