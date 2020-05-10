import React, { createElement } from 'react';
import cn from 'classnames';

import Text from '../Text';
import { EventCardBlueGradient } from './themes/blue-gradient/EventCardBlueGradient';
import { EventCardRedGradient } from './themes/red-gradient/EventCardRedGradient';
import { EventCardVioletGradient } from './themes/violet-gradient/EventCardVioletGradient';
import { getReadableDate } from '../../utils/getReadableDate';
import { getCorrectFontSize } from '../../utils/getCorrectFontSize';

import './EventCard.css';

const themes = {
	'blue-gradient': EventCardBlueGradient,
	'red-gradient': EventCardRedGradient,
	'violet-gradient': EventCardVioletGradient
};

const ThemedContent = ({ theme, ...props }) => createElement(themes[theme], props);

const EventCard = ({ name, date, time, timeMoments, theme }) => {
	const fontSize = getCorrectFontSize(timeMoments);

	return (
		<div className={cn(['event-card-wrapper'])}>
			<Text color='white' font='body2' bold>
				{time === 'future' ? 'До' : 'C'}: {name}
			</Text>
			<Text color='transparent' font='body3'>
				{getReadableDate(date)}
			</Text>
			<ThemedContent theme={theme} fontSize={fontSize} {...timeMoments} />
		</div>
	);
};

export default EventCard;
