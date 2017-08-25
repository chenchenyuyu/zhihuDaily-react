import { combineReducers } from 'redux';
import { sidebarList }from './sidePage';

const zhd = combineReducers({
  sidebar: sidebarList,
});

export default zhd;
