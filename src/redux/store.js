import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root.reducer';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

export const store = createStore( rootReducer, applyMiddleware( thunk ));
export const persistor = persistStore( store );
