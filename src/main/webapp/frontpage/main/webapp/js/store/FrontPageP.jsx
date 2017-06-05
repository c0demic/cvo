import {Provider} from 'react-redux';
import React from 'react';
import frontpageS from 'approot/frontpage/main/webapp/js/reducers/frontpageS.jsx';
import MainBodyC from 'approot/frontpage/main/webapp/js/container/MainBodyC.jsx';
import HeaderC from 'approot/frontpage/main/webapp/js/container/HeaderC.jsx';
import FooterC from 'approot/frontpage/main/webapp/js/container/FooterC.jsx';

const FrontPageP=()=>(
    <Provider store={frontpageS}>
        <div>
            <HeaderC />
            <MainBodyC />
            <FooterC />
        </div>
    </Provider>
);
export default FrontPageP;