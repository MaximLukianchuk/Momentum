import React from 'react';
import cn from 'classnames';

import Text from '../../../Text';

import './EventCardInline.css';

export const EventCardInline = ({
    days,
    hours,
    minutes,
    seconds,
    fontSize,
}) => (
    <div className={cn(['event-card-date', 'event-card-date-inline'])}>
        <div className={cn(['event-card-time', 'event-card-time-inline'])}>
            <Text color='white' font={fontSize}>{days[0]}</Text>
            <Text color='transparent' font='body3'>{days[1]}</Text>
        </div>
        <Text className={'colon-separator'} color='white' font={fontSize}>:</Text>
        <div className={cn(['event-card-time', 'event-card-time-inline'])}>
            <Text color='white' font={fontSize}>{hours[0]}</Text>
            <Text color='transparent' font='body3'> {hours[1]}</Text>
        </div>
        <Text className={'colon-separator'} color='white' font={fontSize}>:</Text>
        <div className={cn(['event-card-time', 'event-card-time-inline'])}>
            <Text color='white' font={fontSize}>{[minutes[0]]}</Text>
            <Text color='transparent' font='body3'> {minutes[1]}</Text>
        </div>
        <Text className={'colon-separator'} color='white' font={fontSize}>:</Text>
        <div className={cn(['event-card-time', 'event-card-time-inline'])}>
            <Text color='white' font={fontSize}>{seconds[0]}</Text>
            <Text color='transparent' font='body3'> {seconds[1]}</Text>
        </div>
    </div>
);
