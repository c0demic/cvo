import {createStore} from 'redux';

//import dataqueryR from 'approot/dataquery/main/webapp/js/reducers/dataqueryR.jsx';
import dataqueryR from './dataqueryR.jsx';
let dataqueryS = createStore(dataqueryR);

export default dataqueryS