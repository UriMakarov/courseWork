

import PropTypes from 'prop-types';

export function IconButton({ img, open, onClick, num = 0, alt }) {
    return (
        <>
            <div className={`w-[40px] h-[40px] ${open ? 'bg-white rounded-[8px]' : 'bg-inherit'} `} onClick={onClick}> {/* <IconButtonContainer*/}
                <img className='m-[10px]' src={img} onClick={onClick} alt={alt} />{/* IconButton */}
                {(num !== 0) && (
                    <div className='relative bg-red w-[16px] h-[16px] rounded-[8px] top-[-38px] left-[22px] flex justify-center'> {/* Circle */}
                        <p className='text-white text-[10px] font-bold font-roboto'>{num}</p>
                    </div>

                )}
            </div>
        </>

    );
}
IconButton.propTypes = {
    img: PropTypes.any,
    open: PropTypes.bool,
    onClick: PropTypes.func,
    num: PropTypes.number,
    alt: PropTypes.string,
}


