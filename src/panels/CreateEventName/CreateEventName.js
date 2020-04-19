import React, { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { IOS, platform } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import Input from '../../components/Input';
import Text from '../../components/Text';
import { setEventName } from '../../store/actions/newEvent';

import './CreateEventName.css';

const osName = platform();

const CreateEventName = ({ id, goForward, goBack }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const handleChange = ({ target: { value } }) => setName(value);
    const inputRef = useRef(null);
    
    const handleClick = props => {
        dispatch(setEventName(name));
        goForward(props);
    };
    
    useEffect(() => {
        const inputNode = inputRef.current;
        inputNode.focus();
    }, [inputRef]);
    
    return (
        <Panel id={id} separator={false}>
            <PanelHeader
                left={<PanelHeaderButton onClick={goBack}>
                    {osName === IOS ? <Icon28ChevronBack fill='black'/> : <Icon24Back fill='black'/>}
                </PanelHeaderButton>}
            />
            <Div className={cn(['create-event-name-wrapper'])}>
                <Text className='create-event-name-title' color='black' font='body3' bold>Название события:</Text>
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
