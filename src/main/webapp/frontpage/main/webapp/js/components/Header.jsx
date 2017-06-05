import {StyleSheet, css}    from 'aphrodite';
import AppBar               from 'material-ui/AppBar';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab}          from 'material-ui/Tabs';
import React                from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();
const Header=(props)=>(
    <MuiThemeProvider>
        <div className="header">
            <AppBar title="CASSACAVO" showMenuIconButton={false}>
            </AppBar>
            <Tabs>
                <Tab label="Home" onClick={()=>props.home()}></Tab>
                <Tab label="Jupyter" onClick={()=>props.jupyter()}></Tab>
                <Tab label="Data Query" onClick={()=>props.dataquery()}></Tab>
                <Tab label="Firefly" onClick={()=>props.firefly()}></Tab>
            </Tabs>
        </div>
    </MuiThemeProvider>
);
export default Header
/*
const Header=(props)=>{
    <MuiThemeProvider muiTheme = {mainHeaderTheme}>
        <div className = {css(styles.headerbar)}>
            <AppBar>

            </AppBar>
            <Tabs>

            </Tabs>
        </div>
    </MuiThemeProvider>
};

const mainHeaderTheme = getMuiTheme(
    {
        palette: {
            textcolor: cyan500,
            primary1Color: indigo900,
        },
        appBar: {
            height: 50,
            backgroundColor: indigo900
        }
    }
);

const leftBanTheme = getMuiTheme(
    {
        palette: {
            textColor: cyan500,
            primary1Color: indigo900,
        }
    }
);

const styles = StyleSheet.create({
    logo: {
        'position': 'absolute',
        'margin-left': '0px',
        'margin-top': '0px',
        'width': 45,
        'height': 45,
    },
    headerbar: {
        'position': 'relative',
        'backgroung': 'black',
        'height': 45,
        'width': '100%',
    },
    text: {
        'margin' : '52px',
        'height' : '20px',
        'position': 'relative',
        'top': '10px',
        'vertical-align': 'middle',
    },
    leftBan: {
        'position': 'relative',
        'margin-top': '53px',
        'width': 200,
        'height': 200,
        'background': 'blue',
        'float': 'left',
    }
});

*/
