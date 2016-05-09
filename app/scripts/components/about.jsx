var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var Header = require('./header.jsx');
require('backbone-react-component');


var About = React.createClass({
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
            <div className="col-md-12 about-info">
              <div className="col-xs-12 col-md-6">
                <h1 className="about-heading">Anna Impson</h1>
                <h1 className="about-career">front-end developer</h1>
                <h1 className="what-i-do">What I Do</h1>
                <p>These days, I've been writing in code. What kind, you may ask? Not django and not Morse. I have been doing that front-end developing business. It has only been a measly three months, but I'm getting in a groove and really enjoying it.
                I went from the beginning of HTML and came out able to write JavaScritp, Backbone, and React. It was quite the whirlwind, but it was a grand time. I am stil in the process of learning, but I love it and I'm ready to learn more. Bring it on! </p>
                <div className="col-xs-12 col-md-12 my-skills">
                  <h1>My Mad Skills</h1>
                </div>
                <div className="col-xs-12 col-md-3 skills-list">
                  <div>HTML5</div>
                  <div>CSS3</div>
                  <div>SCSS</div>
                  <div>JavaScript</div>
                </div>
                <div className="col-xs-12 col-md-3 skills-list">
                  <div>jQuery</div>
                  <div>Underscore.js</div>
                  <div>Handlebars.js</div>
                  <div>Backbone.js</div>
                </div>
                <div className="col-xs-12 col-md-3 skills-list">
                  <div>React.js</div>
                  <div>Bootstrap</div>
                  <div>Parse Server</div>
                </div>
                <div className="col-xs-12 col-md-3 skills-list">
                  <div>Heroku</div>
                  <div>GitHub</div>
                  <div>Git</div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <img src="images/anna headshots-anna headshots lr-0008.jpg" alt="" className="about-profile-pic"/>
              </div>
            </div>
            <div className="my-location">
              <div className="row">
                <div className="col-xs-12 col-md-offset-5 col-md-12">
                  <h1>My Location</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-md-offset-1 col-md-6">
                  <img src="images/icon-map-greensboro.png" alt="" className="map-photo"/>
                </div>
                <div className="col-md-3">
                  <h1 className="wsnc">Winston-Salem, NC</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = About;
