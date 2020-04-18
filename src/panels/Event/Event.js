import React from 'react';
import cn from 'classnames';
import { compose } from 'recompose';
import { createSelector } from 'reselect';

import { platform } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import { useSelector } from 'react-redux';
import { EventCardBase } from '../../components/EventCard/index';
import {
    withThemeColumn,
    withThemeInline,
    withThemeSquare,
    withThemeCenter
} from "../../components/EventCard/_theme/index";

import './Event.css';
import Header from "../../components/Header/Header";

const osName = platform();
const selectEvent = eventId => createSelector(
    state => state.events,
    events => events.filter(event => event.id === eventId)
);

const EventCard = compose(
    withThemeColumn,
    withThemeInline,
    withThemeSquare,
    withThemeCenter
)(EventCardBase);

const Event = ({ id, goBack, eventId }) => {
    const [ event ] = useSelector(selectEvent(eventId));

    return (
        <Panel id={id} separator={false} className={cn(['event-panel', `event-panel-${event.type}`])}>
            <Header osName={osName} goBack={goBack} color='white' edit/>
            <EventCard {...event}/>
        </Panel>
    );
};

export default Event;
