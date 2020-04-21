import React from 'react';
import cn from 'classnames';

import Text from '../../../Text';

import './EventCardColumn.css';

export const EventCardColumn = ({
    days,
    hours,
    minutes,
    seconds,
}) => (
    <div className={cn(['event-card-date', `event-card-date-column`])}>
        <div className={cn(['event-card-time', `event-card-time-column`])}>
            <Text color='white' font='h1'>{days[0]}</Text>
            <Text color='transparent' font='body2'>{days[1]}</Text>
        </div>
        <div className={cn(['event-card-time', `event-card-time-column`])}>
            <Text color='white' font='h1'>{hours[0]}</Text>
            <Text color='transparent' font='body2'> {hours[1]}</Text>
        </div>
        <div className={cn(['event-card-time', `event-card-time-column`])}>
            <Text color='white' font='h1'>{minutes[0]}</Text>
            <Text color='transparent' font='body2'> {minutes[1]}</Text>
        </div>
        <div className={cn(['event-card-time', `event-card-time-column`])}>
            <Text color='white' font='h1'>{seconds[0]}</Text>
            <Text color='transparent' font='body2'> {seconds[1]}</Text>
        </div>
    </div>
);
