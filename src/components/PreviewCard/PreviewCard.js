import React from 'react';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import cn from 'classnames';

import Text from '../Text';
import { useTimer } from '../../hooks/useTimer';
import { getReadableDate } from '../../utils/getReadableDate';
import { getParsedTime } from '../../utils/getParsedTime';


import './PreviewCard.css'

const PreviewCard = ({ className, name, date, type }) => {
  const { time, ...moments } = useTimer(date);
  const [amount, dateType] = getParsedTime(moments);
  
  return (
    <Div className='preview-card-wrapper'>
      <div className={cn(['preview-card', className, `preview-card-${type}`])}>
        <div className='card-event'>
          <Text color='transparent' font='body3'>{time === 'future' ? 'До' : 'C'}</Text>
          <Text color='white' font='h3' bold>{name}</Text>
        </div>
        <div className='card-date'>
          <Text color='transparent' font='body3'>{getReadableDate(date)}</Text>
          <div className='date-inline'>
            <Text color='white' font='h3' bold>{amount}</Text>
            <Text className='date-inline-type' color='transparent' font='body3'>{dateType}</Text>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default PreviewCard
