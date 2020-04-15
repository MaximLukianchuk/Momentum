import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import List from '@vkontakte/vkui/dist/components/List/List';
import Text from "../../components/Text";
// import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';

import './Home.css';

const Home = ({ id, goForward, fetchedEvents }) => {
  
  return (
    <Panel id={id} separator={false}>
      <Text
        className='home-header'
        color='softBlue'
        font='h1'
        bold
      >
        Мои События
      </Text>
      <Group title='Events'>
        <List>
          {/*<Cell expandable onClick={goForward} data-to='persik'>Панель с Персиком</Cell>*/}
          {/*<Cell expandable onClick={goForward} data-to='spotty'>Панель со Спотти</Cell>*/}
  
          {/*<Separator style={{ margin: '12px 0' }} />*/}
          {fetchedEvents.map(({ name }) => <Cell key={name}>{name}</Cell>)}
        </List>
      </Group>
    </Panel>
  );
};

export default Home;
