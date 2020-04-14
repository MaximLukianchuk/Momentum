import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ConfigProvider from '@vkontakte/vkui/dist/components/ConfigProvider/ConfigProvider';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Spotty from './panels/Spotty';
import { useNavigation } from './hooks/useNavigation';

const App = () => {
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const { activePanel, history, goForward, goBack } = useNavigation('home')
	
	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);
	
	return (
		<ConfigProvider isWebView={true}>
			<View
				activePanel={activePanel}
				popout={popout}
				onSwipeBack={goBack}
				history={history}
			>
				<Home id='home' fetchedUser={fetchedUser} goForward={goForward} />
				<Persik id='persik' goBack={goBack} />
				<Spotty id='spotty' goBack={goBack} />
			</View>
		</ConfigProvider>
	);
}

export default App;
