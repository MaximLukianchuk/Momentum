import React from 'react';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import spotty from '../../img/spotty.png';
import './Spotty.css';

const osName = platform();

const Spotty = ({ id, goBack }) => (
  <Panel id={id}>
    <PanelHeader
      left={<PanelHeaderButton onClick={goBack} data-to='home'>
        {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
      </PanelHeaderButton>}
    >
      Spotty
    </PanelHeader>
    <img className='Spotty' src={spotty} alt='Spotty The Dog'/>
  </Panel>
);

export default Spotty;
