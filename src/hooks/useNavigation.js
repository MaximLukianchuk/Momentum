import { useState } from 'react';
import bridge from '@vkontakte/vk-bridge';

export const useNavigation = initialPanel => {
    const [activePanel, setActivePanel] = useState(initialPanel);
    const [history, setHistory] = useState([initialPanel]);

    const goBack = () => {
        const hist = [...history];
        hist.pop();
        const panel = hist[hist.length - 1];

        if (panel === initialPanel) {
            bridge.send('VKWebAppDisableSwipeBack');
        }

        setHistory(hist);
        setActivePanel(panel);
    };

    const goForward = ({ currentTarget: { dataset: { to } }}) => {
        const hist = [...history];

        hist.push(to);

        if (activePanel === initialPanel) {
          bridge.send('VKWebAppEnableSwipeBack');
        }

        setHistory(hist);
        setActivePanel(to);
    };

    return {
        activePanel,
        history,
        goForward,
        goBack
    }
};
