import React from 'react'

import useStakingStore from '../store/useStakingStore'

const ModalWithdraw = ({ children }) => {
    const {showWithdraw} = useStakingStore();
    const showHideClassName = showWithdraw ? 'modal d-block' : 'modal d-none';
    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
            </section>
        </div>
    );
};

export default ModalWithdraw