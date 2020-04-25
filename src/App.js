import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ConfigProvider from '@vkontakte/vkui/dist/components/ConfigProvider/ConfigProvider';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Event from './panels/Event';
import CreateEventName from './panels/CreateEventName';
import CreateEventDate from './panels/CreateEventDate';
import CreateEventTheme from './panels/CreateEventTheme';
import { useNavigation } from './hooks/useNavigation';
import { loadEvents, LoadingState } from './store/actions/events';

import './theme.css';
import './App.css';

const App = () => {
    const dispatch = useDispatch();
    const { events, loadingState } = useSelector(({ events }) => events);
    const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);
    const { activePanel, history, goForward, goBack, clearHistory } = useNavigation('home');
    const [currentEventId, setCurrentEventId] = useState(null);
    const [userId, setUserId] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
            const { id } = await bridge.send('VKWebAppGetUserInfo');
            setUserId(id)
            dispatch(loadEvents(id))
        }
        fetchData();
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
                <Home id='home' fetchedEvents={events} goForward={goForward} setEvent={setCurrentEventId}/>
                <Event id='event' goBack={goBack} eventId={currentEventId}/>
                <CreateEventName id='create_event_name' goForward={goForward} goBack={goBack}/>
                <CreateEventDate id='create_event_date' goForward={goForward} goBack={goBack}/>
                <CreateEventTheme
                    id='create_event_theme'
                    goForward={goForward}
                    goBack={goBack}
                    clearHistory={clearHistory}
                    userId={userId}
                />
            </View>
        </ConfigProvider>
    );
};

export default App;
