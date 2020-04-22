import produce from 'immer';

import { NewEventActionTypes } from '../actions/newEvent';

const initialState = {
    newEvent: {},
};

export const newEventReducer = produce((draft, action) => {
    if (!action) {
        return;
    }
    
    const { payload } = action;
    
    switch (action.type) {
        case NewEventActionTypes.SET_EVENT_NAME:
            draft.newEvent.name = payload.name;
            break;
    
        case NewEventActionTypes.SET_EVENT_DATE:
            draft.newEvent.date = payload.date;
            break;
    
        case NewEventActionTypes.SET_EVENT_THEME:
            draft.newEvent.theme = payload.theme;
            break;
    
        case NewEventActionTypes.CLEAR:
            draft.newEvent = initialState;
            break;
            
        default:
            break
    }
}, initialState);
