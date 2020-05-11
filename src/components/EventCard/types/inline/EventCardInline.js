import React from 'react';
import cn from 'classnames';

import Text from '../../../Text';

import './EventCardInline.css';

const font = 'px Rubik, sans-serif';

export const EventCardInline = ({ days, hours, minutes, seconds, fontSize }) => {
	return (
		<div className={cn(['event-card-date', 'event-card-date-inline'])}>
			<div className={cn(['event-card-time', 'event-card-time-inline'])}>
				<Text color='white' style={{ font: fontSize + font }}>
					{days[0]}
				</Text>
				<Text color='transparent' font='body3'>
					{days[1]}
				</Text>
			</div>
			<Text className='colon-separator' color='white' style={{ font: fontSize + font }}>
				:
			</Text>
			<div className={cn(['event-card-time', 'event-card-time-inline'])}>
				<Text color='white' style={{ font: fontSize + font }}>
					{hours[0]}
				</Text>
				<Text color='transparent' font='body3'>
					{' '}
					{hours[1]}
				</Text>
			</div>
			<Text className='colon-separator' color='white' style={{ font: fontSize + font }}>
				:
			</Text>
			<div className={cn(['event-card-time', 'event-card-time-inline'])}>
				<Text color='white' style={{ font: fontSize + font }}>
					{[minutes[0]]}
				</Text>
				<Text color='transparent' font='body3'>
					{' '}
					{minutes[1]}
				</Text>
			</div>
			<Text className='colon-separator' color='white' style={{ font: fontSize + font }}>
				:
			</Text>
			<div className={cn(['event-card-time', 'event-card-time-inline'])}>
				<Text color='white' style={{ font: fontSize + font }}>
					{seconds[0]}
				</Text>
				<Text color='transparent' font='body3'>
					{' '}
					{seconds[1]}
				</Text>
			</div>
		</div>
	);
};
