import React from 'react';
import cn from 'classnames';

import { IOS } from '@vkontakte/vkui';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Text from '../Text';

import './Header.css';

const Header = ({ className, osName, goBack, color, text }) => {
    return (
        <div className={cn(['header-wrapper', `header-wrapper-${color}`, className])}>
            {
                goBack && (
                    <PanelHeaderButton onClick={goBack} data-to='home' className='header-button'>
                        { osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/> }
                    </PanelHeaderButton>
                )
            }
            {
                text && <Text className='header-text' font='body3' bold>{text}</Text>
            }
        </div>
    );
};

export default Header;
