import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import List from '@vkontakte/vkui/dist/components/List/List';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import bridge from '@vkontakte/vk-bridge';

import HeaderTitle from '../../components/HeaderTitle';
import PreviewCard from '../../components/PreviewCard';

import './Home.css';

const Home = ({ id, goForward, fetchedEvents, setEvent }) => {
    const combineHandlers = (e, id) => {
        goForward(e);
        setEvent(id);
        bridge.send('VKWebAppTapticImpactOccurred', { 'style': 'heavy' });
    };
    
    return (
        <Panel id={id} separator={false}>
            <HeaderTitle
                className='home-header'
                color='softBlue'
                font='h1'
                bold
            >
                Мои События
            </HeaderTitle>
            <Group title='Events'>
                <List>
                    {
                        fetchedEvents && fetchedEvents.map(({ id, name, date, theme }) => (
                            <PreviewCard
                                key={`event-${id}`}
                                id={id}
                                name={name}
                                date={date}
                                theme={theme}
                                onPreviewCardClick={combineHandlers}
                            />
                        ))
                    }
                </List>
            </Group>
            <Button className='add-button' before={<Icon28AddOutline/>}/>
        </Panel>
    );
};

export default Home;
