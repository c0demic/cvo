import { combineReducers } from 'redux';

import getContent from './MainBodyF.jsx';

const frontpageR=combineReducers({getContent});

export default frontpageR;