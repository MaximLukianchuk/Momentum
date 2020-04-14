import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import View from '@vkontakte/vkui/dist/components/View/View';
import ConfigProvider from '@vkontakte/vkui/dist/components/ConfigProvider/ConfigProvider';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Spotty from './panels/Spotty';
import { useNavigation } from './hooks/useNavigation';
import { loadEvents, LoadingState } from './store/actions/events';

const App = () => {
	const dispatch = useDispatch();
	const { events, loadingState } = useSelector(state => state);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const { activePanel, history, goForward, goBack } = useNavigation('home')
	
	useEffect(() => {
		dispatch(loadEvents());
	}, [dispatch]);
	
	useEffect(() => {
		if (loadingState === LoadingState.Loaded) {
			setPopout(null);
		}
	}, [loadingState]);
	
	return (
		<ConfigProvider isWebView={true}>
			<View
				activePanel={activePanel}
				popout={popout}
				onSwipeBack={goBack}
				history={history}
			>
				<Home id='home' fetchedEvents={events} goForward={goForward} />
				<Persik id='persik' goBack={goBack} />
				<Spotty id='spotty' goBack={goBack} />
			</View>
		</ConfigProvider>
	);
}

export default App;
