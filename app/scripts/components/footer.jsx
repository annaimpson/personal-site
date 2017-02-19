var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
require('backbone-react-component');

var footer = React. createClass({

  render: function(){
    return (
      <div>

        <div className="footer">

          <div className="footer__social-icons">
            <a href="https://www.linkedin.com/in/anna-impson-620058b0"><img src="images/linkedin.png" alt="" className="footer__social"/></a>
            <a href="https://www.instagram.com/anna.impson/"><img src="images/instagram.png" alt="" className="footer__social"/></a>
            <a href="https://twitter.com/annaimpson1"><img src="images/twitter.png" alt="" className="footer__social"/></a>
          </div>
        </div>


      </div>
    );
  }
});

module.exports = footer;
