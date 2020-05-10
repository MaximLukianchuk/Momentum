import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { platform } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

import Header from '../../components/Header/Header';
import EventCard from '../../components/EventCard/EventCard';
import FAB from '../../components/FloatingActionButton/FloatingActionButton';
import { useTimer } from '../../hooks/useTimer';
import { getParsedTime } from '../../utils/getParsedTime';
import { wallPostShare, storyShare } from '../../utils/shareEvent';

import './Event.css';

const osName = platform();

const Event = ({ id, goBack, eventId, goForward }) => {
	const [event] = useSelector(({ events: { events } }) => events.filter(e => e.id === eventId));
	const { time, ...moments } = useTimer(event.date);
	const timeMoments = getParsedTime(moments);

	const wallPostShareClosure = () => wallPostShare(time, event.name, timeMoments);

	const storyShareClosure = () => {
		const node = document.getElementsByClassName('event-card-wrapper')[0];
		storyShare(node, event.theme);
	};

	return (
		<Panel
			id={id}
			separator={false}
			className={cn(['event-panel', `event-panel-${event.theme}`])}
		>
			<Header osName={osName} goBack={goBack} color='white' />
			<EventCard
				name={event.name}
				date={event.date}
				time={time}
				timeMoments={timeMoments}
				theme={event.theme}
			/>
			<FAB
				goForward={goForward}
				storyShareClosure={storyShareClosure}
				wallPostShareClosure={wallPostShareClosure}
			/>
		</Panel>
	);
};

export default Event;
