import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { commentReducer } from './commentReducer';


export const rootReducer = combineReducers({
    ui: uiReducer,
    comment: commentReducer,
})

