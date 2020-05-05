export const calculateTime = date => {
	const result = {};
	const moments = {
		days: 86400,
		hours: 3600,
		minutes: 60,
		seconds: 1,
	};

	let diff = (+date - +new Date()) / 1000;
	result.time = diff > 0 ? 'future' : 'past';
	diff = Math.abs(diff);

	Object.keys(moments).forEach(key => {
		result[key] = Math.floor(diff / moments[key]);
		diff -= result[key] * moments[key];
	});

	return result;
};
