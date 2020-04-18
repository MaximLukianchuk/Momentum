import React from 'react';
import cn from 'classnames';
import Text from '../../../Text';
import { decOfNum } from '../../../../utils/decOfNum';
import { getParsedTime, variants, getCorrectFontSize }  from '../../../../utils/getParsedTime';
import { useTimer } from '../../../../hooks/useTimer';
import { withMod } from '../../../../utils/withMod';

import './EventCard_theme_inline.css';

export const withThemeInline = withMod(
    { theme: 'inline' },
    (WrapperComponent) => ({ name, theme, date }) => {
        const { time, ...moments } = useTimer(date);
        const moment = getParsedTime(moments, false);
        const fontSize = getCorrectFontSize(moment);

        return (
            <WrapperComponent name={name} time={time} date={date}>
                <div className={cn(['event-card-date', `event-card-date-${theme}`])}>
                    <div className={cn(['event-card-time', `event-card-time-${theme}`])}>
                        <Text color='white' font={fontSize}>{moment.days}</Text>
                        <Text color='transparent' font='body3'>{decOfNum(moment.days, variants['days'])}</Text>
                    </div>
                    <Text className={'colon-separator'} color='white' font={fontSize}>:</Text>
                    <div className={cn(['event-card-time', `event-card-time-${theme}`])}>
                        <Text color='white' font={fontSize}>{moment.hours}</Text>
                        <Text color='transparent' font='body3'> {decOfNum(moment.hours, variants['hours'])}</Text>
                    </div>
                    <Text className={'colon-separator'} color='white' font={fontSize}>:</Text>
                    <div className={cn(['event-card-time', `event-card-time-${theme}`])}>
                        <Text color='white' font={fontSize}>{moment.minutes}</Text>
                        <Text color='transparent' font='body3'> {decOfNum(moment.minutes, variants['minutes'])}</Text>
                    </div>
                    <Text className={'colon-separator'} color='white' font={fontSize}>:</Text>
                    <div className={cn(['event-card-time', `event-card-time-${theme}`])}>
                        <Text color='white' font={fontSize}>{moment.seconds}</Text>
                        <Text color='transparent' font='body3'> {decOfNum(moment.seconds, variants['seconds'])}</Text>
                    </div>
                </div>
            </WrapperComponent>
        )
    }
);
