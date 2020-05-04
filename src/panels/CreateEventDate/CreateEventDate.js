import React, { useState } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { platform } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Icon16Recent from '@vkontakte/icons/dist/16/recent';
import Icon16CancelCircleOutline from '@vkontakte/icons/dist/16/cancel_circle_outline';

import Text from '../../components/Text';
import Modal from '../../components/Modal';
import DatePicker from '../../components/DatePicker';
import Header from '../../components/Header';
import { getReadableTime } from '../../utils/getReadableTime';
import { setEventDate } from '../../store/actions/newEvent';

import './CreateEventDate.css';

const osName = platform();

const CreateEventName = ({ id, goForward, goBack }) => {
	const dispatch = useDispatch();
	const [date, setDate] = useState(new Date());
	const [exactDate, setExactDate] = useState(false);
	const [isModalOpen, setModalState] = useState(false);
	const handleDateChange = newDate => setDate(newDate);
	const handleExactDateChange = newDate => setExactDate(newDate);
	const handleMainButtonClick = props => {
		date.setSeconds(0);
		date.setMilliseconds(0);

		if (exactDate) {
			date.setHours(exactDate.getHours());
			date.setMinutes(exactDate.getMinutes());
		} else {
			date.setHours(0);
			date.setMinutes(0);
		}

		dispatch(setEventDate(date.getTime()));
		goForward(props);
	};
	const handleChooseDateClick = () => {
		if (!exactDate) {
			setExactDate(new Date(0));
		}
		setModalState(true);
	};
	const handleChooseDateButtonClick = () => {
		setModalState(false);
	};
	const handleDeleteDate = e => {
		e.stopPropagation();
		setExactDate(false);
	};

	return (
		<Panel id={id} separator={false}>
			<Modal isOpen={isModalOpen}>
				<div className='create-event-date-modal'>
					<Text className='title' color='black' font='body3' bold>
						Время события:
					</Text>
					{exactDate && (
						<DatePicker value={exactDate} onChange={handleExactDateChange} exactTime />
					)}
					<Button className='button' onClick={handleChooseDateButtonClick}>
						Готово
					</Button>
				</div>
			</Modal>
			<Header osName={osName} goBack={goBack} color='black' />
			<Div className={cn(['create-event-date-wrapper'])}>
				<Text className='create-event-date-title' color='black' font='body3' bold>
					Дата события:
				</Text>
				<DatePicker value={date} onChange={handleDateChange} />
				<div className='time-picker' onClick={handleChooseDateClick}>
					<Icon16Recent />
					<Text className='time-picker-text'>
						{exactDate ? getReadableTime(exactDate) : 'Укажите время'}
					</Text>
					{exactDate && <Icon16CancelCircleOutline onClick={handleDeleteDate} />}
				</div>
				<Button
					className='create-event-date-button'
					onClick={handleMainButtonClick}
					data-to='create_event_theme'
				>
					Готово
				</Button>
			</Div>
		</Panel>
	);
};

export default CreateEventName;
