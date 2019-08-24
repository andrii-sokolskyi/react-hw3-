import { combineReducers } from 'redux';
import housesReducer from './houses.reducer';
import characterReducer from './character.reducer';
import loaderReducer from './loader.reducer';

export default combineReducers({
    housesReducer,
    characterReducer,
    loaderReducer
});