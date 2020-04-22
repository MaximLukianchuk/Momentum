export const NewEventActionTypes = {
    SET_EVENT_NAME: 'NEW_EVENT:SET_NAME',
    SET_EVENT_DATE: 'NEW_EVENT:SET_DATE',
    SET_EVENT_THEME: 'NEW_EVENT:SET_THEME',
    CLEAR: 'NEW_EVENT:CLEAR',
};

export const setEventName = name => ({
    type: NewEventActionTypes.SET_EVENT_NAME,
    payload: {
        name
    }
});

export const setEventDate = date => ({
    type: NewEventActionTypes.SET_EVENT_DATE,
    payload: {
        date
    }
});

export const setEventTheme = theme => ({
    type: NewEventActionTypes.SET_EVENT_THEME,
    payload: {
        theme
    }
});

export const clearNewEvent = () => ({
    type: NewEventActionTypes.CLEAR,
});
