export const LoadingState = {
  NotLoaded: 0,
  Loading: 1,
  Loaded: 2,
  Errored: 3,
};

export const EventsActionTypes = {
  SET_EVENTS: 'EVENTS:SET_EVENTS',
  SET_LOADING_STATE: 'EVENTS:SET_LOADING_STATE',
};

export const setEvents = events => ({
  type: EventsActionTypes.SET_EVENTS,
  payload: {
    events
  }
});

export const setEventsLoadingState = loadingState => ({
  type: EventsActionTypes.SET_LOADING_STATE,
  payload: {
    loadingState
  }
});

export const loadEvents = () => dispatch => {
  dispatch(setEventsLoadingState(LoadingState.Loading));
  
  setTimeout(() => {
    const events = [
      { name: 'Новый Год', date: new Date(2021, 0, 1) },
      { name: 'Днюха', date: new Date(2020, 9, 2) },
      { name: 'Примерчик', date: new Date(2020, 3, 15, 18, 41) },
    ]
    
    dispatch(setEvents(events));
    dispatch(setEventsLoadingState(LoadingState.Loaded));
  }, 1000)
};
