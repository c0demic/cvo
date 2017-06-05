import {connect} from 'react-redux';
import Header from 'approot/frontpage/main/webapp/js/components/Header.jsx';

const headertabs=()=>({
        dataquery: ()=>(window.location.assign("dataquery.jsp")),
        home: ()=>(window.location.assign("index.jsp")),
        jupyter: ()=>(window.location.assign("jupyter.jsp")),
        firefly: ()=>(window.location.assign("firefly.jsp")),
}
);
const HeaderC = connect(null,headertabs)(Header);

export default HeaderC;