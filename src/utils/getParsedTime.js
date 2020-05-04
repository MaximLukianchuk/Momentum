import { decOfNum } from './decOfNum';

export const variants = {
	seconds: ['секунда', 'секунды', 'секунд'],
	minutes: ['минута', 'минуты', 'минут'],
	hours: ['час', 'часа', 'часов'],
	days: ['день', 'дня', 'дней']
};

export const getParsedTime = (moments, onlyOneMoment) => {
	const orderedMoments = ['days', 'hours', 'minutes', 'seconds'];
	let key = 'seconds';

	for (let i = 0; i < orderedMoments.length; i += 1) {
		if (moments[orderedMoments[i]] > 0) {
			key = orderedMoments[i];
			break;
		}
	}

	return onlyOneMoment
		? [moments[key], decOfNum(moments[key], variants[key])]
		: orderedMoments.reduce(
				(a, v) => ({ ...a, [v]: [moments[v], decOfNum(moments[v], variants[v])] }),
				{}
		  );
};
