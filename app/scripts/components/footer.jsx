var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var Header = require('./header.jsx');
require('backbone-react-component');

var Footer = React.createClass({
  render: function(){
    return (
      <div>
        <div className="footer-background">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <a href="https://www.linkedin.com/in/anna-impson-620058b0"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/anna.impson/">Instagram</a>
                <a href="https://twitter.com/annaimpson1">Twitter</a>
              </div>
              <div className="col-md-3">
                <img src="images/Impson_logo.png" alt="" className="footer-logo"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
