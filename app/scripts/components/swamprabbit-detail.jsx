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
            <div className="drinkUp-pic">
              <div className="row">
                <div className="col-xs-12 col-md-12">
                  <img src="images/responsive-site.png" alt="" className="drinkUp-pic"/>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <h1>That Time I Made Something Responsive</h1>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <h1>Purpose: </h1>
            <p>Create a site that was responsive on all devices</p>
            <h1>Description: </h1>
            <p>We were provided with a wireframe which we were to make responsive using the Bootstrap grid system</p>
          </div>
          <div className="col-xs-12 col-md-6">
            <h1>The Code:</h1>
            <div>HTML5</div>
            <div>CSS</div>
            <div>Bootstrap</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SwampRabbit;
