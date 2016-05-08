var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
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

            <div className="about-profile-pic">
              <div className="row">
                <div className="col-xs-12 col-md-offset-5 col-md-12">
                  <img src="images/anna headshots-anna headshots lr-0008.jpg" alt="" className="about-profile-pic"/>
                </div>
              </div>
            </div>
            <div className="aboutMe">
              <div className="row">
                <div className="col-xs-12 col-md-12">
                  <h1 className="whatIDo">What I Do</h1>
                  <p className="about-me">These days, I've been writing in code. What kind, you may ask? Not django and not Morse. I have been doing that front-end developing business. It has only been a measly three months, but I'm getting in a groove and really enjoying it.
                  I have going from the beginning of HTML and came out able to write JavaScritp, Backbone, and React. It was quite the whirlwind, but it was a grand time. I am stil in the process of learning, but I love it and I'm ready to learn more. Bring it on! </p>
                </div>
              </div>
            </div>
            <div className="skills-list">
              <div className="row">
                <div className="col-xs-8 col-md-3">
                  <div className="skills">
                    <h1>My Mad Skills</h1>
                    <div>HTML5</div>
                    <div>CSS3</div>
                    <div>SCSS</div>
                    <div>JavaScript</div>
                    <div>jQuery</div>
                    <div>Underscore.js</div>
                    <div>Handlebars.js</div>
                    <div>Backbone.js</div>
                    <div>React.js</div>
                    <div>Bootstrap</div>
                    <div>Parse Server</div>
                    <div>Heroku</div>
                    <div>GitHub</div>
                    <div>Git</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-location">
              <div className="row">
                <div className="col-xs-12 col-md-offset-5 col-md-12">
                  <h1>My Location</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-md-offset-2 col-md-12">
                  <img src="http://unsplash.it/800/400"/>
                </div>
              </div>
            </div>


          </div>
          <div className="row">

          </div>
        </div>
        <div className="container-fluid footer">
          <div className="row">
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = About;
