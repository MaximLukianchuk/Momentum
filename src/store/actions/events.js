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
    events
  }
});

export const addEvent = event => ({
  type: EventsActionTypes.ADD_EVENT,
  payload: {
    event
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
      { id: 1, name: 'Новый Год', date: new Date(2021, 0, 1), theme: 'blue-gradient' },
      { id: 2, name: 'День Рождения', date: new Date(2020, 8, 2), theme: 'red-gradient' },
      { id: 3, name: 'Установка приложения', date: new Date(2020, 3, 15, 10, 5), theme: 'violet-gradient' },
      { id: 4, name: 'Сел на карантин', date: new Date(2020, 2, 16), theme: 'red-gradient' },
    ];

    dispatch(setEvents(events));
    dispatch(setEventsLoadingState(LoadingState.Loaded));
  }, 1000)
};

export const createEvent = event => dispatch => {
  dispatch(addEvent(event));
  // TODO: сохранить в базе
};
