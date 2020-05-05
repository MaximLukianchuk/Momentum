const sizes = {
	SIZE_H3: 'h3',
	SIZE_BODY_1: 'body1',
	SIZE_BODY_3: 'body3',
};

const dateLength = {
	SMALL: 7,
	BIG: 10,
};

/**
 * Функция, которая высчитывает корректный размер шрифта для EventCard с темой 'inline',
 * чтобы время помещалось в одноу строку
 *
 * @param moment - объект с текущим временем EventCard
 * @returns {string} - корректный размер шрифта для отображения
 */
export const getCorrectFontSize = moment => {
	const { length } = Object.keys(moment).reduce((acc, key) => acc + moment[key], '');

	if (length <= dateLength.SMALL) {
		return sizes.SIZE_H3;
	}

	if (length > dateLength.SMALL && length < dateLength.BIG) {
		return sizes.SIZE_BODY_1;
	}

	return sizes.SIZE_BODY_3;
};
