import produce from 'immer';

import { EventsActionTypes, LoadingState } from '../actions/events';

const initialState = {
    events: [],
    loadingState: LoadingState.NotLoaded
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
            draft.events = [...draft.events, payload.event];
            break;

        case EventsActionTypes.SET_LOADING_STATE:
            draft.loadingState = payload.loadingState;
            break;

        default:
            break
    }
}, initialState);
