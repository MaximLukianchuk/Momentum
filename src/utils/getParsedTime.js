import { decOfNum } from './decOfNum';

export const variants = {
    'seconds': ['секунда', 'секунды', 'секунд'],
    'minutes': ['минута', 'минуты', 'минут'],
    'hours': ['час', 'часа', 'часов'],
    'days': ['день', 'дня', 'дней'],
};

export const getParsedTime = (moments, onlyOneMoment = true) => {
    const orderedMoments = ['days', 'hours', 'minutes', 'seconds'];
    let key = 'seconds';

    for (let moment of orderedMoments) {
        if (moments[moment] > 0) {
            key = moment;
            break;
        }
    }

    return onlyOneMoment ? [moments[key], decOfNum(moments[key], variants[key]), moments]
        : moments;
};

/**
 * Функция, которая высчитывает корректный размер шрифта для EventCard с темой 'inline',
 * чтобы время помещалось в одноу строку
 *
 * @param moment - объект с текущим временем EventCard
 * @returns {string} - корректный размер шрифта для отображения
 */
export const getCorrectFontSize = moment => {
    const size = Object.keys(moment).reduce((acc, key) => acc + moment[key], '').length;

    if (size <= 7) {
        return 'h3';
    }

    if (size > 7 && size < 10) {
        return 'body1'
    }

    return 'body3';
};
