var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');

var LandingPage = require('./components/landing-page.jsx');
var Home = require('./components/home.jsx');
var About = require('./components/about.jsx');
var Contact = require('./components/contact.jsx');
var DrinkUp = require('./components/drinkup-detail.jsx');
var GitHub = require('./components/github-detail.jsx');
var SurfAndPaddle = require('./components/surfandpaddle-detail.jsx');
var SwampRabbit = require('./components/swamprabbit-detail.jsx');

var appContainer = document.getElementById('app');


var Router = Backbone.Router.extend({
  routes: {
    '': 'homepage',
    'about': 'about',
    'contact': 'contact',
    'drinkUp': 'drinkUp',
    'gitHub': 'gitHub',
    'surfAndPaddle': 'surfAndPaddle',
    'swampRabbit': 'swampRabbit'
  },
  landingpage: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(LandingPage), document.getElementById('app')
    );
  },
  homepage: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(Home), document.getElementById('app')
    );
  },
  about: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(About), document.getElementById('app')
    );
  },
  contact: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(Contact), document.getElementById('app')
    );
  },
  drinkUp: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(DrinkUp), document.getElementById('app')
    );
  },
  gitHub: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(GitHub), document.getElementById('app')
    );
  },
  surfAndPaddle: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(SurfAndPaddle), document.getElementById('app')
    );
  },
  swampRabbit: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(SwampRabbit), document.getElementById('app')
    );
  }
});

module.exports = Router;
