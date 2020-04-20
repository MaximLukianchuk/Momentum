import React from 'react';
import cn from 'classnames';

import Text from '../../../Text';

import './EventCardSquare.css';

export const EventCardSquare = ({
    days,
    hours,
    minutes,
    seconds,
}) => (
    <div className={cn(['event-card-date', 'event-card-date-square'])}>
        <div className={cn(['event-card-time', 'event-card-time-square'])}>
            <Text color='white' font='h1'>{days[0]}</Text>
            <Text color='transparent' font='body3'>{days[1]}</Text>
        </div>
        <div className={cn(['event-card-time', 'event-card-time-square'])}>
            <Text color='white' font='h1'>{hours[0]}</Text>
            <Text color='transparent' font='body3'> {hours[1]}</Text>
        </div>
        <div className={cn(['event-card-time', 'event-card-time-square'])}>
            <Text color='white' font='h1'>{minutes[0]}</Text>
            <Text color='transparent' font='body3'> {minutes[1]}</Text>
        </div>
        <div className={cn(['event-card-time', 'event-card-time-square'])}>
            <Text color='white' font='h1'>{seconds[0]}</Text>
            <Text color='transparent' font='body3'> {seconds[1]}</Text>
        </div>
    </div>
);
