import ReduxThunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

export const getMiddleware = () => applyMiddleware(ReduxThunk);
