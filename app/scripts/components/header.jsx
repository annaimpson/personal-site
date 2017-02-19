var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
require('backbone-react-component');

var head = React. createClass({
  portfolioToggle: function(){
    Backbone.history.navigate('', {trigger: true});
  },
  aboutToggle: function(){
    Backbone.history.navigate('about', {trigger: true});
  },
  contactToggle: function(){
    Backbone.history.navigate('contact', {trigger: true});
  },
  modalToggle: function(){
    var modal = $('#myModal');
    var button = $('.head__mobile-hamburger');
    var selection = $('.selection');
    var close = $('.close-btn');

    button.click(function() {
      modal.show();
    });
    close.click(function() {
      modal.hide();
    });

    selection.click(function() {
        modal.hide();
    });

  },
  render: function(){
    return (
      <div className="head">

        <div className="head__fixed">
          <div className="head__mobile-hamburger" id="hamburger">
            <a onClick={this.modalToggle}><span className="head__line"></span></a>
          </div>
        </div>

        <img src="images/Impson_web logo-02.png" alt="" className="head__logo"/>



        <div id="myModal" className="head__modal modal">
          <span className="close-btn">
            <span className="head__modal-close close"></span>
          </span>
          <ul className="head__mobile-nav">
            <li><a onClick={this.portfolioToggle} className="head__modal-nav selection">Portfolio</a></li>
            <li><a onClick={this.aboutToggle} className="head__modal-nav selection">About</a></li>
            <li><a onClick={this.contactToggle} className="head__modal-nav selection">Contact</a></li>
          </ul>

          <div className="head__modal-social">
            <a href="https://www.linkedin.com/in/anna-impson-620058b0"><img src="images/linkedin.png" alt="" className="head__modal-icons"/></a>
            <a href="https://www.instagram.com/anna.impson/"><img src="images/instagram.png" alt="" className="head__modal-icons"/></a>
            <a href="https://twitter.com/annaimpson1"><img src="images/twitter.png" alt="" className="head__modal-icons"/></a>
          </div>
        </div>



        <div className="head__sticky-nav">
          <div className="head__nav-list">
              <img src="images/Impson_web logo-02.png" alt="" className="head__logo-desktop"/>

              <ul className="head__main-nav">
                <li><a onClick={this.portfolioToggle} className="head__main-nav">Portfolio</a></li>
                <li><a onClick={this.aboutToggle} className="head__main-nav">About</a></li>
                <li><a onClick={this.contactToggle} className="head__main-nav">Contact</a></li>
              </ul>

          </div>
          <div className="head__social-icons">
            <a href="https://www.linkedin.com/in/anna-impson-620058b0"><img src="images/linkedin.png" alt="" className="head__sticky-nav-social"/></a>
            <a href="https://www.instagram.com/anna.impson/"><img src="images/instagram.png" alt="" className="head__sticky-nav-social"/></a>
            <a href="https://twitter.com/annaimpson1"><img src="images/twitter.png" alt="" className="head__sticky-nav-social"/></a>
          </div>
        </div>


      </div>
    );
  }
});

module.exports = head;
