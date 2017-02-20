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

        <div>
          <Header/>
        </div>

        <div className="contact">

            <h1 className="contact__title">Let's Chat</h1>

            <p className="contact__info">I&#39;m a junior front-end developer, and I&#39;m always looking for new projects. Let's talk if you have a cool thing you're working on or if you have a great idea that needs a site. I&#39;m pretty much always up for a coffee and a good chat. I look forward to talking to you!</p>
            <p className="contact__info">and really, if you know of a good podcast, let me know</p>

            <div className="contact__contact-block">
              <h6 className="contact__contact"><a href="mailto:annaimpson@gmail.com">annaimpson@gmail.com</a></h6>
              <h6 className="contact__sub-title">email</h6>
            </div>

            <div className="contact__contact-block">
              <h6 className="contact__contact">864 351 9864</h6>
              <h6 className="contact__sub-title">phone</h6>
            </div>

            <div className="contact__bubbles">
              <h3 className="contact__links"><a href="images/Impson_resume.pdf">Resume</a></h3>
              <h3 className="contact__links"><a href="https://github.com/annaimpson">GitHub</a></h3>
            </div>
        </div>


        <div>
          <Footer/>
        </div>

      </div>
    );
  }
});

module.exports = Contact;
