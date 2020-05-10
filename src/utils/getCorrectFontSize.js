const MAX_CHARACTERS = 12;
const MAGIC_COEFFICIENT = 1.5;

/**
 * Функция, которая высчитывает корректный размер шрифта для EventCard с темой 'inline',
 * чтобы время помещалось в одноу строку
 *
 * @param moment - объект с текущим временем EventCard
 * @returns {number} - корректный размер шрифта для отображения
 */
export const getCorrectFontSize = moment => {
	const length =
		MAX_CHARACTERS * MAGIC_COEFFICIENT -
		Object.keys(moment).reduce((acc, key) => acc + String(moment[key][0]).length, 0);
	const screenWidth = window.innerWidth / 100;

	return length * screenWidth;
};
