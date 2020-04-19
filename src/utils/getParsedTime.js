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
