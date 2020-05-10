import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ConfigProvider from '@vkontakte/vkui/dist/components/ConfigProvider/ConfigProvider';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Event from './panels/Event';
import SelectEventName from './panels/SelectEventName';
import SelectEventDate from './panels/SelectEventDate';
import SelectEventTheme from './panels/SelectEventTheme';
import EditEvent from './panels/EditEvent';
import { useNavigation } from './hooks/useNavigation';
import { loadEvents, LoadingState } from './store/actions/events';

import './theme.css';
import './App.css';

const App = () => {
	const dispatch = useDispatch();
	const { events, loadingState } = useSelector(({ events }) => events);
	const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);
	const { activePanel, history, goForward, goBack, setHistoryForce } = useNavigation('home');
	const [currentEventId, setCurrentEventId] = useState(null);
	const [userId, setUserId] = useState(null);
	const [currentEvent] = useSelector(({ events: { events } }) => events.filter(e => e.id === currentEventId));
	
	useEffect(() => {
		async function fetchData() {
			const { id } = await bridge.send('VKWebAppGetUserInfo');
			setUserId(id);
			dispatch(loadEvents(id));
		}
		
		fetchData();
	}, [dispatch]);
	
	useEffect(() => {
		if (loadingState === LoadingState.Loaded) {
			setPopout(null);
		}
	}, [loadingState]);
	
	return (
		<ConfigProvider isWebView>
			<View
				activePanel={activePanel}
				popout={popout}
				onSwipeBack={goBack}
				history={history}
				header={false}
			>
				<Home
					id='home'
					fetchedEvents={events}
					goForward={goForward}
					setEvent={setCurrentEventId}
				/>
				
				<Event
					id='event'
					goBack={goBack}
					goForward={goForward}
					eventId={currentEventId}
				/>
				
				<SelectEventName
					id='create_event_name'
					goForward={goForward}
					goBack={goBack}
				/>
				
				<SelectEventDate
					id='create_event_date'
					goForward={goForward}
					goBack={goBack}
				/>
				
				<SelectEventTheme
					id='create_event_theme'
					goForward={goForward}
					goBack={goBack}
					setHistoryForce={setHistoryForce}
					userId={userId}
					setEventId={setCurrentEventId}
				/>
				
				<EditEvent
					id='edit_event'
					goForward={goForward}
					goBack={goBack}
					setHistoryForce={setHistoryForce}
					eventId={currentEventId}
					userId={userId}
				/>
				
				<SelectEventName
					id='update_event_name'
					goForward={goForward}
					goBack={goBack}
					userId={userId}
					event={currentEvent}
					isUpdater
				/>
				
				<SelectEventDate
					id='update_event_date'
					goForward={goForward}
					goBack={goBack}
					userId={userId}
					event={currentEvent}
					isUpdater
				/>
				
				<SelectEventTheme
					id='update_event_theme'
					goForward={goForward}
					goBack={goBack}
					userId={userId}
					event={currentEvent}
					isUpdater
				/>
			</View>
		</ConfigProvider>
	);
};

export default App;
