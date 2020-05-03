import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');

export const getReadableDate = date => moment(date).format('LLL');
