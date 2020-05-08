import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { platform } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';

import Header from '../../components/Header/Header';
import EventCard from '../../components/EventCard/EventCard';

import './Event.css';

const osName = platform();

const Event = ({ id, goBack, eventId, goForward }) => {
    const [event] = useSelector(({ events: { events } }) => events.filter(e => e.id === eventId));
    
    return (
        <Panel id={id} separator={false} className={cn(['event-panel', `event-panel-${event.theme}`])}>
            <Header osName={osName} goBack={goBack} color='white'/>
            <EventCard {...event}/>
            <FixedLayout vertical='bottom'>
                <Button
                    className='edit-button'
                    before={<Icon28SettingsOutline/>}
                    onClick={goForward}
                    data-to='edit_event'
                />
            </FixedLayout>
        </Panel>
    );
};

export default Event;
