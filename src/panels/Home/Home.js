import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import List from '@vkontakte/vkui/dist/components/List/List';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

const Home = ({ id, goForward, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader>Темы</PanelHeader>
    {fetchedUser &&
    <Group title='User Data Fetched with VK Bridge'>
      <Cell
        before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
        description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
      >
        {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
      </Cell>
    </Group>}
    
    <Group title='Navigation Example'>
      <List>
        <Cell expandable onClick={goForward} data-to='persik'>Панель с Персиком</Cell>
        <Cell expandable onClick={goForward} data-to='spotty'>Панель со Спотти</Cell>
      </List>
    </Group>
  </Panel>
);

export default Home;
