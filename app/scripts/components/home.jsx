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
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <div className="overlay">
                    <a onClick={this.drinkToggle}>
                      <h1 className="drinkup-title">Drink Up</h1>
                      <img src="images/drinkup.png" alt=""  className="drinkup-icon"/>
                    </a>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  <a onClick={this.gitHubToggle}>
                    <h1 className="github-title">GitHub</h1>
                    <img src="images/github.png" alt=""  className="github-icon"/>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <a onClick={this.surfToggle}>
                    <h1 className="surfandpaddle-title">Surf &amp; Paddle</h1>
                    <img src="images/surfpaddle.png" alt=""  className="surfandpaddle-icon"/>
                  </a>
                </div>
                <div className="col-xs-12 col-md-6">
                  <a onClick={this.swampRabbitToggle}>
                    <h1 className="swamprabbit-title">Swamp Rabbit <br/>Cycling</h1>
                    <img src="images/bike.png" alt="" className="swamprabbit-icon"/>
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
