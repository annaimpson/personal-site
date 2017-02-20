var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
require('backbone-react-component');

var GitHub = React.createClass({
  render: function(){
    return (
      <div>

        <div>
          <Header/>
        </div>

        <div className="project">

                <h1 className="project__title">That time I made and AJAX request</h1>

                <div className="project__project-info">
                  <div className="project__about">
                    <h1 className="project__sub-title">Purpose: </h1>
                    <p className="project__description">Make an AJAX request and recreate your GitHub profile</p>
                    <h1 className="project__sub-title">Description: </h1>
                    <p className="project__description">For this project, I worked with the GitHub API and recreated the repository portion of my profile page. </p>
                  </div>

                  <div className="project__links">
                    <p className="project__view">View the code <a href="https://github.com/annaimpson/github-profile">here</a></p>
                    <p className="project__view">View the live site <a href="http://annaimpson.github.io/github-profile/dist/index.html">here</a></p>
                  </div>
                </div>

                <a href="http://annaimpson.github.io/github-profile/dist/index.html"><img src="images/github-snap.png" alt="" className="project__mockup"/></a>

                <h1 className="project__sub-title">The Code:</h1>
                <ul className="project__code">
                  <li>HTML5</li>
                  <li>SCSS</li>
                  <li>Bootstrap</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>Underscore.js</li>
                  <li>Handlebars.js</li>
                  <li>AJAX</li>
                </ul>

          </div>

        <div>
          <Footer/>
        </div>


      </div>
    );
  }
});

module.exports = GitHub;
