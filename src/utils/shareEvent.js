import bridge from '@vkontakte/vk-bridge';
import domtoimage from 'dom-to-image';

const mapBackground = {
	'blue-gradient': 'linear-gradient(315deg, #738bdc 0%, #48c3eb 74%)',
	'red-gradient': 'linear-gradient(315deg, #ee9617 0%, #fe5858 74%)',
	'violet-gradient': 'linear-gradient(315deg, #42378f 0%, #f53844 74%)'
};

const getMessage = (time, name, { days, hours, minutes, seconds }) => {
	let str = '';

	if (time === 'future') {
		str += `До события "${name}" осталось `;
	} else {
		str += `C начала события "${name}" уже прошло `;
	}

	str +=
		`${days[0] !== 0 ? `${days[0]} ${days[1]} ` : ''}` +
		`${hours[0] !== 0 ? `${hours[0]} ${hours[1]} ` : ''}` +
		`${minutes[0] !== 0 ? `${minutes[0]} ${minutes[1]} ` : ''}` +
		`${seconds[0] !== 0 ? `${seconds[0]} ${seconds[1]}` : ''}!\n\n` +
		'Запечатлить свой момент можно в приложении Momentum.';

	return str;
};

export const wallPostShare = (time, name, timeMoments) => {
	bridge.send('VKWebAppShowWallPostBox', {
		message: getMessage(time, name, timeMoments),
		attachments: 'https://vk.com/app7409014'
	});
};

export const storyShare = (node, theme) => {
	const scale = 2;
	const style = {
		transform: `scale(${scale})`,
		transformOrigin: 'top left',
		width: `${node.offsetWidth}px`,
		height: `${node.offsetHeight}px`,
		padding: '20px',
		borderRadius: '15px',
		background: mapBackground[theme]
	};
	const param = {
		height: node.offsetHeight * scale + 150,
		width: node.offsetWidth * scale + 150,
		quality: 1,
		style
	};

	domtoimage
		.toPng(node, param)
		.then(blob => {
			bridge.send('VKWebAppShowStoryBox', {
				background_type: 'none',
				stickers: [
					{
						sticker_type: 'renderable',
						sticker: {
							can_delete: 0,
							content_type: 'image',
							blob,
							transform: {
								relation_width: 0.75
							},
							clickable_zones: [
								{
									action_type: 'link',
									action: {
										link: 'https://vk.com/app7409014',
										tooltip_text_key: 'tooltip_open_app'
									},
									clickable_area: [
										{
											x: 17,
											y: 110
										},
										{
											x: 97,
											y: 110
										},
										{
											x: 97,
											y: 132
										},
										{
											x: 17,
											y: 132
										}
									]
								}
							]
						}
					}
				]
			});
		})
		.catch(function (error) {
			console.error('Story error', error);
		});
};
