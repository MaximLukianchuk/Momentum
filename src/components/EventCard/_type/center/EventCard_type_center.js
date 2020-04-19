import React from 'react';
import cn from 'classnames';
import Text from '../../../Text';
import { decOfNum } from '../../../../utils/decOfNum';
import { getParsedTime, variants } from '../../../../utils/getParsedTime';
import { useTimer } from '../../../../hooks/useTimer';
import { withMod } from '../../../../utils/withMod';

import './EventCard_type_center.css';

export const withTypeCenter = withMod(
    { type: 'center' },
    WrapperComponent => ({ name, type, date }) => {
        const { time, ...moments } = useTimer(date);
        const moment = getParsedTime(moments, false);
        const day = decOfNum(moment.days, variants['days']);
        const hour = decOfNum(moment.hours, variants['hours']);
        const minute = decOfNum(moment.minutes, variants['minutes']);
        const second = decOfNum(moment.seconds, variants['seconds']);

        return (
            <WrapperComponent name={name} time={time} date={date}>
                <div className={cn(['event-card-date', `event-card-date-${type}`])}>
                    <Text className={cn(['event-card-time', `event-card-time-${type}`])} color='white' font='h1'>
                        {moment.days}
                        <div className='event-card-days-after' data-width={day.length}>
                            <Text color='transparent' font='body2' data-width='3'>{day}</Text>
                        </div>
                    </Text>
                    <Text className={cn(['event-card-time', `event-card-time-${type}`])} color='white' font='h1'>
                        {moment.hours}
                        <div className='event-card-hours-before' data-width={hour.length}>
                            <Text color='transparent' font='body2'>{hour}</Text>
                        </div>
                    </Text>
                    <Text className={cn(['event-card-time', `event-card-time-${type}`])} color='white' font='h1'>
                        {moment.minutes}
                        <div className='event-card-minutes-after' data-width={minute.length}>
                            <Text color='transparent' font='body2'>{minute}</Text>
                        </div>
                    </Text>
                    <Text className={cn(['event-card-time', `event-card-time-${type}`])} color='white' font='h1'>
                        {moment.seconds}
                        <div className='event-card-seconds-before' data-width={second.length}>
                            <Text color='transparent' font='body2'>{second}</Text>
                        </div>
                    </Text>
                </div>
            </WrapperComponent>
        )
    }
);
