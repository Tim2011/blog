import {combineReducers} from 'redux-loop';
import {routeReducer as router} from 'react-router-redux';
import {reducer as images} from 'modules/gallery';
import {reducer as articles} from 'modules/list';
export default combineReducers({
  router,
  images,
  articles,
});
