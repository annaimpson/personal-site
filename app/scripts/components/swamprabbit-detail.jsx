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
            <div className="col-md-12 swamprabbit-info">
              <div className="col-xs-12 col-md-6">
                <h1 className="swamprabbit-heading">That time I made something responsive</h1>
                <h1 className="swamprabbit-purpose">Purpose: </h1>
                <p>Create a site that was responsive on all devices</p>
                <h1>Description: </h1>
                <p>I was provided with a wireframe which I made responsive using the Bootstrap grid system</p>
                <p>View the code <a href="https://github.com/annaimpson/responsive-site/tree/master">here</a></p>
                <p>View the live site <a href="http://annaimpson.github.io/responsive-site/dist/index.html">here</a></p>
              </div>
              <div className="col-xs-12 col-md-6">
                <a href="http://annaimpson.github.io/responsive-site/dist/index.html"><img src="images/responsive.png" alt="" className="mockup-pic"/></a>
              </div>
            </div>
            <div className="col-xs-12 col-md-12">
              <div className="col-xs-12 col-md-4 the-code">
                <h1>The Code:</h1>
                <div>HTML5</div>
                <div>CSS</div>
                <div>Bootstrap</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SwampRabbit;
