var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var Header = require('./header.jsx');
require('backbone-react-component');

var GitHub = React.createClass({
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
            <div className="col-md-12 github-info">
              <div className="col-xs-12 col-md-6">
                <h1 className="github-heading">That time I made and AJAX request</h1>
                <h1 className="github-purpose">Purpose: </h1>
                <p>Make an AJAX request and display the information</p>
                <h1>Description: </h1>
                <p>For this project, we worked with the GitHub API and recreated the repository portion of our profile page. </p>
                <p>View the code <a href="https://github.com/annaimpson/github-profile">here</a></p>
                <p>View the live site <a href="http://annaimpson.github.io/github-profile/dist/index.html">here</a></p>
              </div>
              <div className="col-xs-12 col-md-6">
                <img src="images/github-snap.png" alt="" className="github-pic"/>
              </div>
            </div>
            <div className="col-xs-12 col-md-12">
              <div className="col-xs-12 col-md-4 the-code">
                <h1>The Code:</h1>
                <div>HTML5</div>
                <div>CSS</div>
                <div>Bootstrap</div>
                <div>JavaScript</div>
                <div>jQuery</div>
                <div>Underscore.js</div>
                <div>Handlebars.js</div>
                <div>AJAX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = GitHub;
