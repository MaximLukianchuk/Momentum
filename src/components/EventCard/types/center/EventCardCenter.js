import React from 'react';
import cn from 'classnames';

import Text from '../../../Text';

import './EventCardCenter.css';

export const EventCardCenter = ({
    days,
    hours,
    minutes,
    seconds,
}) => (
    <div className={cn(['event-card-date', 'event-card-date-center'])}>
        <Text className={cn(['event-card-time', 'event-card-time-center'])} color='white' font='h1'>
            {days[0]}
            <div className='event-card-days-after' data-width={days[1].length}>
                <Text color='transparent' font='body2' data-width='3'>{days[1]}</Text>
            </div>
        </Text>
        <Text className={cn(['event-card-time', 'event-card-time-center'])} color='white' font='h1'>
            {hours[0]}
            <div className='event-card-hours-before' data-width={hours[1].length}>
                <Text color='transparent' font='body2'>{hours[1]}</Text>
            </div>
        </Text>
        <Text className={cn(['event-card-time', 'event-card-time-center'])} color='white' font='h1'>
            {minutes[0]}
            <div className='event-card-minutes-after' data-width={minutes[1].length}>
                <Text color='transparent' font='body2'>{minutes[1]}</Text>
            </div>
        </Text>
        <Text className={cn(['event-card-time', 'event-card-time-center'])} color='white' font='h1'>
            {seconds[0]}
            <div className='event-card-seconds-before' data-width={seconds[1].length}>
                <Text color='transparent' font='body2'>{seconds[1]}</Text>
            </div>
        </Text>
    </div>
);
