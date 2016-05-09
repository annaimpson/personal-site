var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var Header = require('./header.jsx');
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
            <div className="col-xs-12 col-md-12">
              <h1 className="chat">Let's Chat</h1>
            </div>
            <div className="col-xs-12 col-md-offset-3 col-md-6">
              <p className="talk-to-me">I am a front-end web developer seeking to contribute and grow in a junior web development role. I work well in
                a team environment, consistently meet deadlines, and have an eye for detail. If those qualities fit into your team enviroment, let's talk!</p>
              <p className="final-statement">I am a quick learner who is eager to gain knowledge and acquire new skills</p>
            </div>
            <div className="col-xs-12 col-md-offset-4 col-md-4">
              <h6 className="phone">864 351 9864</h6>
              <h6 className="word-phone">phone</h6>
            </div>
            <div className="col-xs-12 col-md-pull-2 col-md-4">
              <h6 className="email">annaimpson@gmail.com</h6>
              <h6 className="word-email">email</h6>
            </div>
            <div className="col-xs-12 col-md-offset-3 col-md-4">
              <a href="images/Impson_resume-1 copy.pdf"><h3 className="resume">Resume</h3></a>
            </div>
            <div className="col-xs-12 col-md-pull-2 col-md-5">
              <a href="https://github.com/annaimpson"><h3 className="github">GitHub</h3></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Contact;
