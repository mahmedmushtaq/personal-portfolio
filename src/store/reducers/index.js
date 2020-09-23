import { combineReducers } from 'redux';
import siteSettings from './site-settings';
import skills from './skills';
import works from './works';

const reducer = combineReducers({
  siteSettings,
  skills,
  works,
});

export default reducer;
