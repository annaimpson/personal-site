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
              <h1 className="about__header-title">Anna Impson</h1>
              <h6 className="about__sub-title">front-end developer</h6>
            </div>

            <img src="images/anna headshots-anna headshots lr-0008.jpg" alt="" className="about__profile-pic"/>

            <h1 className="about__title">What I Do</h1>
            <p className="about__description">I am currently in Winston-Salem, working full time at Airtype, slaying the dart game, and hanging out with the best dog in town. I&#39;ve been working on some pretty cool projects at work, and I&#39;m setting up some personal projects as well. Otherwise, I&#39;m listening to podcasts &#40;if you have any recs, let me know!&#41;, eating some good food, and looking for my next travel adventure.</p>

          <h1 className="about__title">What I Know</h1>

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
              <li className="about__skill">Angular.js</li>
              <li className="about__skill">Bootstrap</li>
              <li className="about__skill">Parse Server</li>
              <li className="about__skill">Heroku</li>
              <li className="about__skill">GitHub</li>
              <li className="about__skill">Git</li>
              <li className="about__skill">Craft CMS</li>
            </ul>


            <div className="about__location">
              <h1 className="about__title">Where I Live</h1>
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
