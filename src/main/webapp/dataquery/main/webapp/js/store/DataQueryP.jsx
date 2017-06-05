import {Provider} from 'react-redux';
import React from 'react';
import dataqueryS from 'approot/dataquery/main/webapp/js/reducers/dataqueryS.jsx';
import DataQueryBarC from 'approot/dataquery/main/webapp/js/container/DataQueryBarC.jsx';

const DataQueryP=()=>(
    <Provider store={dataqueryS}>
        <div>
            <DataQueryBarC />
        </div>
    </Provider>
);
export default DataQueryP;