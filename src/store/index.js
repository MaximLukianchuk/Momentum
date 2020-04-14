import { createStore } from 'redux';

import { eventsReducer } from './reducers/events';
import { getMiddleware } from './middleware';

export const getStore = () => createStore(eventsReducer, getMiddleware());
