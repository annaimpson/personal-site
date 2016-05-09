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
        <div className="col-xs-8 col-md-offset-1 col-md-12 nav-list">
          <img src="images/Impson_web logo-02.png" alt="" className="header-logo"/>
          <div className="row">
            <a onClick={this.portfolioToggle} className="portfolio-nav">Portfolio</a>
          </div>
          <div className="row">
            <a onClick={this.aboutToggle} className="about-nav">About</a>
          </div>
          <div className="row">
            <a onClick={this.contactToggle} className="contact-nav">Contact</a>
          </div>
        </div>
        <div className="col-xs-12 col-md-offset-1 col-md-12 social-icons">
          <a href="https://www.linkedin.com/in/anna-impson-620058b0"><img src="images/linkedin.png" alt="" className="linkedin-logo"/></a>
          <a href="https://www.instagram.com/anna.impson/"><img src="images/instagram.png" alt="" className="instagram-logo"/></a>
          <a href="https://twitter.com/annaimpson1"><img src="images/twitter.png" alt="" className="twitter-logo"/></a>
        </div>
      </div>
    );
  }
});

module.exports = Header;
