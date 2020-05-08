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

import './SelectEventName.css';
import { updateEvent } from '../../store/actions/events';

const osName = platform();

const SelectEventName = ({ id, goForward, goBack, userId, event, isUpdater }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(event ? event.name : '');
    const handleChange = ({ target: { value } }) => setName(value);
    const inputRef = useRef(null);
    
    const handleClick = props => {
        const eventName = name || 'Назови Меня';
        
        if (isUpdater) {
            dispatch(updateEvent(userId, event.id, { name: eventName }));
            goBack();
        } else {
            dispatch(setEventName(name));
            goForward(props);
        }
    };
    
    useEffect(() => {
        const inputNode = inputRef.current;
        inputNode.focus();
    }, [inputRef]);
    
    return (
        <Panel id={id} separator={false}>
            <Header osName={osName} goBack={goBack} color='black'/>
            <Div className={cn(['select-event-name-wrapper'])}>
                <Text className='select-event-name-title' color='black' font='body3' bold>Название события:</Text>
                <Input
                    className='select-event-name-input'
                    placeholder='Назови Меня'
                    onChange={handleChange}
                    value={name}
                    font='h3'
                    color='softBlue'
                    ref={inputRef}
                />
                <Button
                    className='select-event-name-button'
                    onClick={handleClick}
                    data-to='create_event_date'
                >
                    Готово
                </Button>
            </Div>
        </Panel>
    );
};

export default SelectEventName;
