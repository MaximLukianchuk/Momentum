import React, { useState } from 'react';
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

import Text from '../../components/Text';
import DatePicker from '../../components/DatePicker';
import { setEventDate } from '../../store/actions/newEvent';

import './CreateEventDate.css';

const osName = platform();

const CreateEventName = ({ id, goForward, goBack }) => {
    const dispatch = useDispatch();
    const [date, setDate] = useState(new Date());
    const handleChange = newDate => setDate(newDate);
    
    const handleClick = props => {
        dispatch(setEventDate(date));
        goForward(props);
    };
    
    return (
        <Panel id={id} separator={false}>
            <PanelHeader
                left={<PanelHeaderButton onClick={goBack}>
                    {osName === IOS ? <Icon28ChevronBack fill='black'/> : <Icon24Back fill='black'/>}
                </PanelHeaderButton>}
            />
            <Div className={cn(['create-event-date-wrapper'])}>
                <Text className='create-event-date-title' color='black' font='body3' bold>Дата события:</Text>
                <DatePicker
                    value={date}
                    onChange={handleChange}
                />
                <Button
                    className='create-event-date-button'
                    onClick={handleClick}
                    data-to='create_event_theme'
                >
                    Готово
                </Button>
            </Div>
        </Panel>
    );
};

export default CreateEventName;
