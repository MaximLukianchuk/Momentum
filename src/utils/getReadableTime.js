import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');

export const getReadableTime = date => moment(date).format('HH:mm');
