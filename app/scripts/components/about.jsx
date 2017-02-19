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

        <div>
            <Header/>
        </div>


        <div className="about">

            <div className="about__header">
              <h1 className="about__title">Anna Impson</h1>
              <h6 className="about__sub-title">front-end developer</h6>
            </div>

            <img src="images/anna headshots-anna headshots lr-0008.jpg" alt="" className="about__profile-pic"/>

            <h1 className="about__title">What I Do</h1>
            <p className="about__description">These days, I've been writing in code. What kind, you may ask? Not django and not Morse. I have been doing that front-end developing business. It has only been a measly three months, but I'm getting in a groove and really enjoying it.
            I went from the beginning of HTML and came out able to write JavaScritp, Backbone, and React. It was quite the whirlwind, but it was a grand time. I am stil in the process of learning, but I love it and I'm ready to learn more. Bring it on! </p>

          <h1 className="about__title">My Mad Skills</h1>

            <ul className="about__skills-list">
              <li className="about__skill">HTML5</li>
              <li className="about__skill">CSS3</li>
              <li className="about__skill">SCSS</li>
              <li className="about__skill">JavaScript</li>
              <li className="about__skill">jQuery</li>
              <li className="about__skill">Underscore.js</li>
              <li className="about__skill">Handlebars.js</li>
              <li className="about__skill">Backbone.js</li>
              <li className="about__skill">React.js</li>
              <li className="about__skill">Bootstrap</li>
              <li className="about__skill">Parse Server</li>
              <li className="about__skill">Heroku</li>
              <li className="about__skill">GitHub</li>
              <li className="about__skill">Git</li>
            </ul>


            <div className="about__location">
              <h1 className="about__title">My Location</h1>
              <img src="images/icon-map-greensboro.png" alt="" className="about__map"/>
              <h1 className="about__wsnc">Winston-Salem, NC</h1>
            </div>

        </div>

        <div>
            <Footer/>
        </div>


      </div>
    );
  }
});

module.exports = About;
