import React from 'react';
import cn from 'classnames';
import Icon36Done from '@vkontakte/icons/dist/36/done';

import './EventCardExample.css'

const EventCardExample = ({ className, theme, selected }) => (
    <div className={cn(['event-card-example', className, `event-card-example-${theme}`])} data-theme={theme}>
        {selected && (
            <>
                <div className='selected' />
                <Icon36Done fill='white' className='done-icon'/>
            </>
        )}
    </div>
);

export default EventCardExample;
