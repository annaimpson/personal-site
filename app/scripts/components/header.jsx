var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
require('backbone-react-component');

var Header = React. createClass({
  portfolioToggle: function(){
    Backbone.history.navigate('homepage', {trigger: true});
  },
  aboutToggle: function(){
    Backbone.history.navigate('about', {trigger: true});
  },
  contactToggle: function(){
    Backbone.history.navigate('contact', {trigger: true});
  },
  render: function(){
    return (
      <div className="header-background">
        <div className="container">
          <div className="nav-list">
            <a onClick={this.portfolioToggle} className="portfolio-nav">Portfolio</a>
            <a onClick={this.aboutToggle} className="about-nav">About</a>
            <a onClick={this.contactToggle} className="contact-nav">Contact</a>
          </div>
          <div className="header-logo">
            <img src="images/Impson_logo.png" alt="" className="header-logo"/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
