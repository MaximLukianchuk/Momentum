export const LoadingState = {
	NotLoaded: 0,
	Loading: 1,
	Loaded: 2,
	Errored: 3
};

export const EventsActionTypes = {
	SET_EVENTS: 'EVENTS:SET_EVENTS',
	SET_LOADING_STATE: 'EVENTS:SET_LOADING_STATE',
	ADD_EVENT: 'EVENTS:ADD_EVENT',
	REMOVE_EVENT: 'EVENTS:REMOVE_EVENT',
	UPDATE_EVENT: 'EVENTS:UPDATE_EVENT',
};

export const setEvents = events => ({
	type: EventsActionTypes.SET_EVENTS,
	payload: {
		events
	}
});

export const addEvent = event => ({
	type: EventsActionTypes.ADD_EVENT,
	payload: {
		event
	}
});

export const removeEvent = eventId => ({
	type: EventsActionTypes.REMOVE_EVENT,
	payload: {
		eventId
	}
});

export const updateEventProperties = (eventId, changes) => ({
	type: EventsActionTypes.UPDATE_EVENT,
	payload: {
		eventId,
		changes
	}
});

export const setEventsLoadingState = loadingState => ({
	type: EventsActionTypes.SET_LOADING_STATE,
	payload: {
		loadingState
	}
});

export const loadEvents = id => dispatch => {
	dispatch(setEventsLoadingState(LoadingState.Loading));
	
	fetch(
		`${process.env.REACT_APP_LOCAL_URL || process.env.REACT_APP_PUBLIC_URL}/user/${id}/${
			process.env.REACT_APP_API_TOKEN
		}/${window.location.search}`
	)
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
	fetch(
		`${process.env.REACT_APP_LOCAL_URL || process.env.REACT_APP_PUBLIC_URL}/user/${id}/${
			process.env.REACT_APP_API_TOKEN
		}/add_event/${window.location.search}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ event })
		}
	);
};

export const deleteEvent = (userId, eventId) => dispatch => {
	dispatch(removeEvent(eventId));
	fetch(`${process.env.REACT_APP_LOCAL_URL || process.env.REACT_APP_PUBLIC_URL}/user/${userId}/${
		process.env.REACT_APP_API_TOKEN
	}/delete_event/${window.location.search}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ eventId }),
	});
};

export const updateEvent = (userId, eventId, changes) => dispatch => {
	dispatch(updateEventProperties(eventId, changes));
	fetch(`${process.env.REACT_APP_LOCAL_URL || process.env.REACT_APP_PUBLIC_URL}/user/${userId}/${
		process.env.REACT_APP_API_TOKEN
	}/update_event/${window.location.search}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ eventId, ...changes }),
	});
};
