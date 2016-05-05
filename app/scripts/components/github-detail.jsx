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
            <div className="drinkUp-pic">
              <div className="row">
                <div className="col-xs-12 col-md-12">
                  <img src="images/github-profile.png" alt="" className="drinkUp-pic"/>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <h1>That Time I Made an AJAX Request</h1>
          </div>
          <div className="col-xs-12 col-md-6">
            <h1>Purpose: </h1>
            <p>Make an AJAX request and display the information</p>
            <h1>Description: </h1>
            <p>For this project, we worked with the GitHub API and recreated the repository portion of our profile page.</p>
          </div>
          <div className="col-xs-12 col-md-6">
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
    );
  }
});

module.exports = GitHub;
