import React, { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { platform } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import Input from '../../components/Input';
import Text from '../../components/Text';
import Header from '../../components/Header';
import { setEventName } from '../../store/actions/newEvent';

import './CreateEventName.css';

const osName = platform();

const CreateEventName = ({ id, goForward, goBack }) => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const handleChange = ({ target: { value } }) => setName(value);
	const inputRef = useRef(null);

	const handleClick = props => {
		dispatch(setEventName(name || 'Назови Меня'));
		goForward(props);
	};

	useEffect(() => {
		const inputNode = inputRef.current;
		inputNode.focus();
	}, [inputRef]);

	return (
		<Panel id={id} separator={false}>
			<Header osName={osName} goBack={goBack} color='black' />
			<Div className={cn(['create-event-name-wrapper'])}>
				<Text className='create-event-name-title' color='black' font='body3' bold>
					Название события:
				</Text>
				<Input
					className='create-event-name-input'
					placeholder='Назови Меня'
					onChange={handleChange}
					value={name}
					font='h3'
					color='softBlue'
					ref={inputRef}
				/>
				<Button
					className='create-event-name-button'
					onClick={handleClick}
					data-to='create_event_date'
				>
					Готово
				</Button>
			</Div>
		</Panel>
	);
};

export default CreateEventName;
