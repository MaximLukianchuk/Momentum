import React from 'react';
import cn from "classnames";
import Text from "../../../Text";
import { decOfNum } from "../../../../utils/decOfNum";
import { getParsedTime, variants } from "../../../../utils/getParsedTime";
import { useTimer } from "../../../../hooks/useTimer";
import { withMod } from "../../../../utils/withMod";

import './EventCard_theme_column.css';

export const withThemeColumn = withMod(
    {theme: 'column'},
    (WrapperComponent) => ({ name, theme, date }) => {
        const { time, ...moments } = useTimer(date);
        const moment = getParsedTime(moments, false);

        return (
            <WrapperComponent name={name} time={time} date={date}>
                <div className={cn(['event-card-date', `event-card-date-${theme}`])}>
                    <div className={cn(['event-card-time', `event-card-time-${theme}`])}>
                        <Text color='white' font='h1'>{moment.days}</Text>
                        <Text color='transparent' font='body2'>{decOfNum(moment.days, variants['days'])}</Text>
                    </div>
                    <div className={cn(['event-card-time', `event-card-time-${theme}`])}>
                        <Text color='white' font='h1'>{moment.hours}</Text>
                        <Text color='transparent' font='body2'> {decOfNum(moment.hours, variants['hours'])}</Text>
                    </div>
                    <div className={cn(['event-card-time', `event-card-time-${theme}`])}>
                        <Text color='white' font='h1'>{moment.minutes}</Text>
                        <Text color='transparent' font='body2'> {decOfNum(moment.minutes, variants['minutes'])}</Text>
                    </div>
                    <div className={cn(['event-card-time', `event-card-time-${theme}`])}>
                        <Text color='white' font='h1'>{moment.seconds}</Text>
                        <Text color='transparent' font='body2'> {decOfNum(moment.seconds, variants['seconds'])}</Text>
                    </div>
                </div>
            </WrapperComponent>
        )
    }
);
