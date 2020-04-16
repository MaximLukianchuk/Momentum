import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import List from '@vkontakte/vkui/dist/components/List/List';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';

import Header from '../../components/Header';
import PreviewCard from '../../components/PreviewCard';

import './Home.css';

const Home = ({ id, goForward, fetchedEvents, setEvent}) => {
    // const combineHandlers = (e, id) => {
    //     goForward(e);
    //     setEvent(id);
    // };

    return (
        <Panel id={id} separator={false}>
            <Header
                className='home-header'
                color='softBlue'
                font='h1'
                bold
            >
                Мои События
            </Header>
            <Group title='Events'>
                <List>
                    {
                        fetchedEvents.map(({ id, name, date, type }) => (
                            <Cell
                                className='preview-card-cell'
                                key={`event-${id}`}
                                data-to='event'
                                onClick={goForward}
                            >
                                <PreviewCard name={name} date={date} type={type}/>
                            </Cell>
                        ))
                    }
                </List>
            </Group>
            <Button className='add-button' before={<Icon28AddOutline/>}/>
        </Panel>
    );
};

export default Home;
