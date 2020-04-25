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
import { createEvent } from '../../store/actions/events';
import { clearNewEvent } from '../../store/actions/newEvent';

import './CreateEventTheme.css';

const osName = platform();

const themes = [
    'red-gradient',
    'blue-gradient',
    'violet-gradient'
];

const CreateEventTheme = ({ id, goForward, goBack, clearHistory, userId }) => {
    const dispatch = useDispatch();
    const newEvent = useSelector(({ newEvent: { newEvent } }) => newEvent);
    const [selected, setSelected] = useState('red-gradient');
    const handleSelect = ({ target: { dataset: { theme } } }) => {
        theme && setSelected(theme);
    };
    const handleClick = props => {
        dispatch(createEvent(userId, {...newEvent, theme: selected, id: generateId() }));
        dispatch(clearNewEvent());
        goForward(props);
        clearHistory();
    };
    
    return (
        <Panel id={id} separator={false}>
            <Header className='create-event-theme-header' osName={osName} goBack={goBack} color='black' text='Темы оформления'/>
            <Div className={cn(['create-event-theme-wrapper'])}>
                <div className='example-cards-container' onClick={handleSelect}>
                    {
                        themes.map(el => (
                            <EventCardExample key={el} theme={el} selected={selected === el} />
                        ))
                    }
                </div>
                <FixedLayout vertical='bottom'>
                    <Button
                        className='create-event-theme-button'
                        onClick={handleClick}
                        data-to='home'
                    >
                        Готово
                    </Button>
                </FixedLayout>
            </Div>
        </Panel>
    );
};

export default CreateEventTheme;
