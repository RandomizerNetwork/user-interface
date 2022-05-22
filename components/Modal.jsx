import React from 'react'

import useStakingStore from '../store/useStakingStore'

const Modal = ({ children }) => {
    const {showCalculator} = useStakingStore();
    const showHideClassName = showCalculator ? 'modal d-block' : 'modal d-none';
    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
            </section>
        </div>
    );
};

export default Modal