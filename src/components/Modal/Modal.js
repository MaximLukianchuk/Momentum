import React from 'react';
import cn from 'classnames';

import './Modal.css'

const Modal = ({ className, children, isOpen }) => (
    <div className={cn(['modal-wrapper', className, {
        hidden: !isOpen
    }])}>
        <div className='modal-content'>
            {children}
        </div>
    </div>
);

export default Modal;
