import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import View from '@vkontakte/vkui/dist/components/View/View';
import ConfigProvider from '@vkontakte/vkui/dist/components/ConfigProvider/ConfigProvider';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Event from './panels/Event';
import Persik from "./panels/Persik";
import { useNavigation } from './hooks/useNavigation';
import { loadEvents, LoadingState } from './store/actions/events';

import './theme.css';
import './App.css';

const App = () => {
	const dispatch = useDispatch();
	const { events, loadingState } = useSelector(state => state);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const { activePanel, history, goForward, goBack } = useNavigation('home');
	const [currentEventId, setCurrentEventId] = useState(null);

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
				header={false}
			>
				<Home id='home' fetchedEvents={events} goForward={goForward} setEvent={setCurrentEventId} />
				<Event id='event' goBack={goBack} eventId={currentEventId} />
				<Persik id='persik' goBack={goBack} />
			</View>
		</ConfigProvider>
	);
};

export default App;
