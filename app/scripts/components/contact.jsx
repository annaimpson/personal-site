var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
require('backbone-react-component');

var Contact = React.createClass({
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
            <div className="col-xs-12 col-md-6">
              <h1 className="chat">Let's Chat</h1>
              <p className="talk-to-me">If you're looking for a hard worker that's eager to learn, let's talk! Hit me up and creep until you're heart is content. </p>
            </div>
            <div className="col-xs-12 col-md-6">
              <h6>864 351 9864</h6>
              <h6>annaimpson@gmail.com</h6>
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

module.exports = Contact;
