import reduxSaga from 'redux-saga';
import MiddleReSa from '../redux/saga/MiddleReSa';

const redux = require('redux');
const { default: rdcUser } = require('./reducer/rdcUser');

const middleWare = reduxSaga();

const globalState = {
    stateUsers: rdcUser
}

const allRdc = redux.combineReducers(globalState);

export default redux.createStore(
    allRdc,
    redux.applyMiddleware(middleWare)
);
// run redux-saga luôn nằm dưới "applyMiddleware"
middleWare.run(MiddleReSa)