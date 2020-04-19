import { createStore, combineReducers } from 'redux';

import { eventsReducer } from './reducers/events';
import { newEventReducer } from './reducers/newEvent';
import { getMiddleware } from './middleware';

const rootReducer = combineReducers({
    events: eventsReducer,
    newEvent: newEventReducer
});

export const getStore = () => createStore(rootReducer, getMiddleware());
