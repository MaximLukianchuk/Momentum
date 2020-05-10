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

		setHistory(hist => hist.slice(0, hist.length -1));
		setActivePanel(panel);
	};

	const goForward = ({ currentTarget: { dataset: { to } } }) => {
		if (activePanel === initialPanel) {
			bridge.send('VKWebAppEnableSwipeBack');
		}

		setHistory(hist => [...hist, to]);
		setActivePanel(to);
	};

	const setHistoryForce = hist => {
		setHistory([...hist]);
	};

	return {
		activePanel,
		history,
		goForward,
		goBack,
		setHistoryForce,
	};
};
