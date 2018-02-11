import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    // background:
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className='container__button_content'>
          { this.props.children }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
