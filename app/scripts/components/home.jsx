var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var Header = require('./header.jsx');
require('backbone-react-component');

var Home = React.createClass({
  drinkToggle: function(){
    Backbone.history.navigate('drinkUp', {trigger: true});
  },
  gitHubToggle: function(){
    Backbone.history.navigate('gitHub', {trigger: true});
  },
  surfToggle: function(){
    Backbone.history.navigate('surfAndPaddle', {trigger: true});
  },
  swampRabbitToggle: function(){
    Backbone.history.navigate('swampRabbit', {trigger: true});
  },
  render: function(){
    return (
      <div>
        <div className="container-fluid header">
          <div className="row">
            <Header/>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="projects">
              <div className="col-xs-12 col-md-6">
                <a onClick={this.drinkToggle}><h1 className="drinkup">Drink Up</h1></a>
              </div>
              <div className="col-xs-12 col-md-6">
                <a onClick={this.gitHubToggle}><h1 className="github">GitHub</h1></a>
              </div>
              <div className="col-xs-12 col-md-6">
                <a onClick={this.surfToggle}><h1 className="surfandpaddle">Surf &amp; Paddle Co.</h1></a>
              </div>
              <div className="col-xs-12 col-md-6">
                <a onClick={this.swampRabbitToggle}><h1 className="swamprabbit">Swamp Rabbit Cycling</h1></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
