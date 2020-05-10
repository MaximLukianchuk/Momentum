import React from 'react';
import cn from 'classnames';

import './Text.css';

const Text = ({ className, color, font, bold, children, style }) => (
	<span
		className={cn(['text', className, `text-${color}`, `text-${font}`], {
			'text-bold': bold
		})}
		style={style}
	>
		{children}
	</span>
);

export default Text;
