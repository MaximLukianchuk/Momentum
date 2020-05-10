import React, { useState } from 'react';
import cn from 'classnames';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon24Share from '@vkontakte/icons/dist/24/share';
import Icon24Story from '@vkontakte/icons/dist/24/story';
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';
import Button from '@vkontakte/vkui/dist/components/Button/Button';

import './FloatingActionButton.css';

const FAB = ({ goForward, storyShareClosure, wallPostShareClosure }) => {
	const [hidden, setHidden] = useState(false);

	return (
		<FixedLayout vertical='bottom' className={cn('container', { hidden })}>
			<Button className='buttons' before={<Icon24Share />} onClick={wallPostShareClosure} />
			<Button className='buttons' before={<Icon24Story />} onClick={storyShareClosure} />
			<Button
				className='buttons'
				before={<Icon28SettingsOutline />}
				onClick={goForward}
				data-to='edit_event'
			/>
			<Button
				className='buttons'
				before={<Icon24MoreHorizontal />}
				onClick={() => setHidden(!hidden)}
			/>
		</FixedLayout>
	);
};

export default FAB;
