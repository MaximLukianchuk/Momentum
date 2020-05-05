import React from 'react';
import cn from 'classnames';

import './Text.css';

const Text = ({
	className, color, font, bold, children,
}) => (
	<span className={cn(['text', className, `text-${color}`, `text-${font}`], {
		'text-bold': bold,
	})}
	>
		{children}
	</span>
);

export default Text;
