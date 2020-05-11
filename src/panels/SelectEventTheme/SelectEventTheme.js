import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { generate as generateId } from 'shortid';
import { platform } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';

import EventCardExample from '../../components/EventCardExample';
import Header from '../../components/Header';
import { createEvent, updateEvent } from '../../store/actions/events';
import { clearNewEvent } from '../../store/actions/newEvent';

import './SelectEventTheme.css';

const osName = platform();

const themes = ['red-gradient', 'blue-gradient', 'violet-gradient', 'green-gradient'];

const SelectEventTheme = ({ id, goForward, goBack, setHistoryForce, userId, event, setEventId, isUpdater }) => {
	const dispatch = useDispatch();
	const newEvent = useSelector(({ newEvent: { newEvent } }) => newEvent);
	const [selected, setSelected] = useState(event ? event.theme : 'red-gradient');
	const handleSelect = ({
		target: {
			dataset: { theme }
		}
	}) => {
		if (theme) {
			setSelected(theme);
		}
	};
	const handleClick = props => {
		if (isUpdater) {
			dispatch(updateEvent(userId, event.id, { theme: selected }));
			goBack();
		} else {
			const id = generateId();
			dispatch(createEvent(userId, { ...newEvent, theme: selected, id }));
			dispatch(clearNewEvent());
			setEventId(id);
			goForward(props);
			setHistoryForce(['home', 'event']);
		}
	};

	return (
		<Panel id={id} separator={false}>
			<Header
				className='select-event-theme-header'
				osName={osName}
				goBack={goBack}
				color='black'
				text='Темы оформления'
			/>
			<Div className={cn(['select-event-theme-wrapper'])}>
				<div className='example-cards-container' onClick={handleSelect}>
					{themes.map(el => (
						<EventCardExample key={el} theme={el} selected={selected === el} />
					))}
				</div>
				<FixedLayout vertical='bottom'>
					<Button
						className='select-event-theme-button'
						onClick={handleClick}
						data-to='event'
					>
						Готово
					</Button>
				</FixedLayout>
			</Div>
		</Panel>
	);
};

export default SelectEventTheme;
