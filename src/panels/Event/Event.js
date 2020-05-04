import React from 'react';
import cn from 'classnames';

import { platform } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import { useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import EventCard from '../../components/EventCard/EventCard';

const osName = platform();

const Event = ({ id, goBack, eventId }) => {
	const [event] = useSelector(({ events: { events } }) => events.filter(e => e.id === eventId));

	return (
		<Panel
			id={id}
			separator={false}
			className={cn(['event-panel', `event-panel-${event.theme}`])}
		>
			<Header osName={osName} goBack={goBack} color='white' edit />
			<EventCard {...event} />
		</Panel>
	);
};

export default Event;
