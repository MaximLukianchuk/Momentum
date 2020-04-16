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
      { id: 1, name: 'Новый Год', date: new Date(2021, 0, 1), type: 'blue-theme' },
      { id: 2, name: 'Днюха', date: new Date(2020, 8, 2), type: 'red-theme' },
      { id: 3, name: 'Установка приложения', date: new Date(2020, 3, 15, 10, 5), type: 'violet-theme' },
    ];

    dispatch(setEvents(events));
    dispatch(setEventsLoadingState(LoadingState.Loaded));
  }, 1000)
};
