import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import AppRoutes from './app.route';
import NetworkInterceptor from '../services/interceptor/interceptor';
import * as redux from '../store/createStore';
import environments from '../environments/environments';

NetworkInterceptor.setupInterceptors(redux.store);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="https://tinhyeuconggiao.com">Brand</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><a href="https://tinhyeuconggiao.com">Link 1 <span className="sr-only">(current)</span></a></li>
                <li><a href="a">Link 2</a></li>
              </ul>
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </div>
          </div>
        </nav>
        <Router basename={environments.APP_BASE_NAME}>
          <AppRoutes {...this.props} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  settings: { ...state.settings },
});

App.propTypes = {
  settings: PropTypes.object,
};

App.defaultProps = {
  settings: {},
};

export default connect(mapStateToProps, null)(App);
