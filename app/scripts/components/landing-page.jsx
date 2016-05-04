var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
require('backbone-react-component');


var LandingPage = React.createClass({
  enterToggle: function(){
    Backbone.history.navigate('homepage', {trigger: true});
  },
  render: function(){
    return (
      <div>
        <div className="landing-page-background">
          <div className="container">
            <div className="row">
              <div className="col-xs-8 col-md-offset-5 col-md-7">
                <img className="landing-page-logo" src="images/Impson_logo.png" alt="my logo"/>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-8 col-md-offset-5 col-md-4">
                <button onClick={this.enterToggle} className="enter">Take a Gander</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LandingPage;
