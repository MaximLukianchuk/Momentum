import produce from 'immer';

import { EventsActionTypes, LoadingState } from '../actions/events';

const initialState = {
	events: [],
	loadingState: LoadingState.NotLoaded,
};

export const eventsReducer = produce((draft, action) => {
	if (!action) {
		return;
	}
	
	const { payload } = action;
	
	switch (action.type) {
		case EventsActionTypes.SET_EVENTS:
			draft.events = payload.events;
			break;
		
		case EventsActionTypes.ADD_EVENT:
			draft.events = [payload.event, ...draft.events];
			break;
		
		case EventsActionTypes.REMOVE_EVENT:
			draft.events = draft.events.filter(({ id }) => id !== payload.eventId);
			break;
		
		case EventsActionTypes.UPDATE_EVENT:
			draft.events = draft.events.map(
				event => event.id !== payload.eventId ? event : { ...event, ...payload.changes }
			);
			break;
		
		case EventsActionTypes.SET_LOADING_STATE:
			draft.loadingState = payload.loadingState;
			break;
		
		default:
			break;
	}
}, initialState);
