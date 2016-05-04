var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var Header = require('./header.jsx');
require('backbone-react-component');

var SurfAndPaddle = React.createClass({
  render: function(){
    return (
      <div>
        <div className="container-fluid header">
          <div className="row">
            <Header/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SurfAndPaddle;
