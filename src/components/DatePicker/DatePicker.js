import React from 'react';
import { IOS, ANDROID, platform } from '@vkontakte/vkui';
import * as BaseDatePicker from 'react-mobile-datepicker';

const osName = platform();
const mapOsNames = {
	[IOS]: 'ios',
	[ANDROID]: 'android'
};
const datePickerTheme = mapOsNames[osName] ? mapOsNames[osName] : 'default';

const monthMap = {
	1: 'января',
	2: 'февраля',
	3: 'марта',
	4: 'апреля',
	5: 'мая',
	6: 'июня',
	7: 'июля',
	8: 'августа',
	9: 'сентября',
	10: 'октября',
	11: 'ноября',
	12: 'декабря',
};

const mainConfig = {
	date: {
		format: 'DD',
		caption: 'Day',
		step: 1,
	},
	month: {
		format: value => monthMap[value.getMonth() + 1],
		caption: 'Mon',
		step: 1,
	},
	year: {
		format: 'YYYY',
		caption: 'Year',
		step: 1,
	},
};

const extraTimeConfig = {
	hour: {
		format: 'hh',
		caption: 'Hour',
		step: 1,
	},
	minute: {
		format: 'mm',
		caption: 'Min',
		step: 1,
	},
};

const DatePicker = ({ exactTime, ...props }) => (
	<BaseDatePicker
		theme={datePickerTheme}
		isPopup={false}
		showHeader={false}
		showFooter={false}
		dateConfig={exactTime ? extraTimeConfig : mainConfig}
		{...props}
	/>
);

export default DatePicker;
