var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var Header = require('./header.jsx');
require('backbone-react-component');

var SwampRabbit = React.createClass({
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
            <div className="responsive-info">
              <div className="col-xs-12 col-md-6">
                <h1>That Time I Made Something Responsive</h1>
                <h1>Purpose: </h1>
                <p>Create a site that was responsive on all devices</p>
                <h1>Description: </h1>
                <p>We were provided with a wireframe which we were to make responsive using the Bootstrap grid system</p>
                <p>View the code <a href="https://github.com/annaimpson/responsive-site/tree/master">here</a></p>
                <p>View the live site <a href="http://annaimpson.github.io/responsive-site/dist/index.html">here</a></p>
                <h1>The Code:</h1>
                <div>HTML5</div>
                <div>CSS</div>
                <div>Bootstrap</div>
              </div>
            </div>
            <div className="drinkUp-pic">
              <div className="col-xs-12 col-md-6">
                <img src="images/responsive.png" alt="" className="mockup-pic"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SwampRabbit;
