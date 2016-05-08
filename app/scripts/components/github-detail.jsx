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
        <div className="container-fluid header">
          <div className="row">
            <Header/>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="github-info">
              <div className="col-xs-12 col-md-6">
                <h1>That Time I Made an AJAX Request</h1>
                <h1>Purpose: </h1>
                <p>Make an AJAX request and display the information</p>
                <h1>Description: </h1>
                <p>For this project, we worked with the GitHub API and recreated the repository portion of our profile page.</p>
                <p>View the code <a href="https://github.com/annaimpson/github-profile">here</a></p>
                <p>View the live site <a href="http://annaimpson.github.io/github-profile/dist/index.html">here</a></p>
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
            <div className="github-picture">
              <div className="col-xs-12 col-md-6">
                <img src="images/github-snap.png" alt="" className="github-pic"/>
              </div>
            </div>
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

module.exports = GitHub;
