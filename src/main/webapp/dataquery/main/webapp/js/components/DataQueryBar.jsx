import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const DataQueryBar=(props)=>(
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
            <TextField name="RA" /><br/>
            <TextField name="DEC" /><br/>
            <TextField name="project-name" /><br/>
            <TextField name="project-id" /><br/>
            <RaisedButton label="search" />
        </div>
    </MuiThemeProvider>
);

export default DataQueryBar