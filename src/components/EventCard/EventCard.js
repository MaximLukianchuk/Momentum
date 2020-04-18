import React from 'react';
import cn from 'classnames';

import Text from '../Text';
import { getReadableDate } from '../../utils/getReadableDate';

import './EventCard.css';

const EventCard = ({ name, time, date, children }) => {
    return (
        <div className={cn(['event-card-wrapper'])}>
            <Text color='white' font='body2' bold>{time === 'future' ? 'До' : 'C'}: {name}</Text>
            <Text color='transparent' font='body3'>{getReadableDate(date)}</Text>
            {children}
        </div>
    );
};

export default EventCard
