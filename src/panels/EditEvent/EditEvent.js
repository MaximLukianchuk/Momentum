import React from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { platform } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Icon24Delete from '@vkontakte/icons/dist/24/delete';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Switch from '@vkontakte/vkui/dist/components/Switch/Switch';
import Icon28Write from '@vkontakte/icons/dist/28/write';
import Icon28CalendarOutline from '@vkontakte/icons/dist/28/calendar_outline';
import Icon28Notification from '@vkontakte/icons/dist/28/notification';

import Header from '../../components/Header/Header';
import { deleteEvent } from '../../store/actions/events';

import './EditEvent.css';
import { getReadableDate } from '../../utils/getReadableDate';

const osName = platform();

const Event = ({ id, goBack, eventId, goForward, userId, clearHistory }) => {
    const dispatch = useDispatch();
    const [event] = useSelector(({ events: { events } }) => events.filter(e => e.id === eventId));
    const handleClick = props => {
        dispatch(deleteEvent(userId, eventId));
        goForward(props);
        clearHistory();
    };
    
    return (
        <Panel id={id} separator={false}>
            <Header className='edit-event-header' osName={osName} goBack={goBack} color='black' text='Редактировать'/>
            <Div className={cn(['edit-event-wrapper'])}>
                <Group>
                    <Cell
                        className={cn(['edit-cell', 'edit-name'])}
                        expandable
                        before={<Icon28Write className='edit-icon' fill='white'/>}
                        onClick={goForward}
                        data-to='update_event_name'
                    >
                        {event ? event.name : 'Название'}
                    </Cell>
                    <Cell
                        className={cn(['edit-cell', 'edit-date'])}
                        expandable
                        before={<Icon28CalendarOutline className='edit-icon' fill='white'/>}
                        onClick={goForward}
                        data-to='update_event_date'
                    >
                        {getReadableDate(event && event.date) || 'Дата'}
                    </Cell>
                    <Cell
                        className={cn(['edit-cell', 'edit-notifications'])}
                        before={<Icon28Notification className='edit-icon' fill='white'/>}
                        asideContent={<Switch disabled/>}
                    >
                        Уведомления
                    </Cell>
                    {event && event.theme && <Cell
                        className={cn(['edit-cell', 'edit-theme', `theme-${event.theme}`])}
                        expandable
                        before={<Icon28Write className='edit-icon' fill='white'/>}
                        onClick={goForward}
                        data-to='update_event_theme'
                    >
                        Оформление
                    </Cell>}
                </Group>
                <FixedLayout vertical='bottom'>
                    <Button
                        className='edit-event-button'
                        onClick={handleClick}
                        data-to='home'
                    >
                        <div className='button-container'>
                            <Icon24Delete/>
                            <p className='button-text'>Удалить</p>
                        </div>
                    </Button>
                </FixedLayout>
            </Div>
        </Panel>
    );
};

export default Event;
