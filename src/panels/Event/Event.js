import React from 'react';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osName = platform();

const Event = ({ id, goBack, eventId }) => {
    // console.log('Event', eventId);
    return (
        <Panel id={id}>
            <PanelHeader
                left={
                    <PanelHeaderButton onClick={goBack} data-to='home'>
                        { osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/> }
                    </PanelHeaderButton>
                }
            >
                Event
            </PanelHeader>
        </Panel>
    );
}

export default Event;
