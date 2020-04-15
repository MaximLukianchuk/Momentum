import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import List from '@vkontakte/vkui/dist/components/List/List';
// import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';

import Header from '../../components/Header';
import PreviewCard from '../../components/PreviewCard';

import './Home.css';

const Home = ({ id, goForward, fetchedEvents }) => {
  
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
          
          {/*<Cell expandable onClick={goForward} data-to='persik'>Панель с Персиком</Cell>*/}
          {/*<Cell expandable onClick={goForward} data-to='spotty'>Панель со Спотти</Cell>*/}
  
          {/*<Separator style={{ margin: '12px 0' }} />*/}
          {fetchedEvents.map(({ name, date }, i) => <Cell className='preview-card-cell' key={`event-${i}`}><PreviewCard name={name} date={date} type='tomato'/></Cell>)}
        </List>
      </Group>
    </Panel>
  );
};

export default Home;
