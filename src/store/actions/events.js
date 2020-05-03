export const LoadingState = {
	NotLoaded: 0,
	Loading: 1,
	Loaded: 2,
	Errored: 3,
};

export const EventsActionTypes = {
	SET_EVENTS: 'EVENTS:SET_EVENTS',
	SET_LOADING_STATE: 'EVENTS:SET_LOADING_STATE',
	ADD_EVENT: 'EVENTS:ADD_EVENT',
};

export const setEvents = events => ({
	type: EventsActionTypes.SET_EVENTS,
	payload: {
		events,
	},
});

export const addEvent = event => ({
	type: EventsActionTypes.ADD_EVENT,
	payload: {
		event,
	},
});

export const setEventsLoadingState = loadingState => ({
	type: EventsActionTypes.SET_LOADING_STATE,
	payload: {
		loadingState,
	},
});

export const loadEvents = id => dispatch => {
    dispatch(setEventsLoadingState(LoadingState.Loading));

    fetch(`${process.env.REACT_APP_LOCAL_URL || process.env.REACT_APP_PUBLIC_URL}/user/${id}/${process.env.REACT_APP_API_TOKEN}`)
        .then(res => res.json())
        .then(({ events }) => {
            dispatch(setEvents(events));
            dispatch(setEventsLoadingState(LoadingState.Loaded));
        })
        .catch(err => {
            console.log(err);
            dispatch(setEventsLoadingState(LoadingState.Errored));
        });
};

export const createEvent = (id, event) => dispatch => {
    dispatch(addEvent(event));

    fetch(`${process.env.REACT_APP_LOCAL_URL || process.env.REACT_APP_PUBLIC_URL}/user/${id}/${process.env.REACT_APP_API_TOKEN}/add_event`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ event }),
    })
};
