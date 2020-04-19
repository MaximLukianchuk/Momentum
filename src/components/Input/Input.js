import React, { forwardRef } from 'react';
import cn from 'classnames';

import './Input.css'

const Input = forwardRef(({ className, color, font, ...props }, ref) => (
    <input
        className={cn(['input', className, `input-${color}`, `input-${font}`])}
        ref={ref}
        {...props}
    />
));

export default Input
