import React from 'react';
import cn from 'classnames';
import { compose } from 'recompose';
import { createSelector } from 'reselect';

import { platform } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import { useSelector } from 'react-redux';
import { EventCardBase } from '../../components/EventCard/index';
import {
    withTypeColumn,
    withTypeInline,
    withTypeSquare,
    withTypeCenter
} from '../../components/EventCard/_type/index';

import './Event.css';
import Header from '../../components/Header/Header';

const osName = platform();
const selectEvent = eventId => createSelector(
    state => state.events,
    events => events.filter(event => event.id === eventId)
);

const EventCard = compose(
    withTypeColumn,
    withTypeInline,
    withTypeSquare,
    withTypeCenter
)(EventCardBase);

const Event = ({ id, goBack, eventId }) => {
    const [ event ] = useSelector(selectEvent(eventId));

    return (
        <Panel id={id} separator={false} className={cn(['event-panel', `event-panel-${event.theme}`])}>
            <Header osName={osName} goBack={goBack} color='white' edit/>
            <EventCard {...event}/>
        </Panel>
    );
};

export default Event;
