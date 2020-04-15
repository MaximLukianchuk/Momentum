import React from 'react';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import cn from 'classnames';

import './Text.css'

const Text = ({ className, color, font, bold, children }) => (
  <Div className='text-wrapper'>
      <span className={cn(['text', className, `text-${color}`, `text-${font}`], {
        'text-bold': bold,
      })}>
        {children}
      </span>
  </Div>
);

export default Text
