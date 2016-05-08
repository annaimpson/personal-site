var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var Carousel = require('react-bootstrap').Carousel;
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
require('backbone-react-component');

var DrinkUp = React.createClass({
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
            <div className="drinkup-info">
              <div className="col-xs-12 col-md-6">
                <h1>That Time I Made Something That Combined All My Skills</h1>
                <h1>Purpose: </h1>
                <p>Use what you know. Also, have a log-in, API, information stored in Parse, and ability to upload photos.</p>
                <h1>Description: </h1>
                <p>I created this application for several reasons, I love beer, I wanted to challenge myself, and I wanted something the worked well and looked great.
                  I had many grandiose ideas, but three weeks only allotted me so much. Therefore, this site was created for those who also like beer. It allows the user to create a profile,
                  search for beer types, flavor profiles, and breweries. In addition, they user can save specific beer to their profile to refer to later. </p>
                <p>View the code <a href="https://github.com/annaimpson/beer-final-project">here</a></p>
                <p>View the live site <a href="http://annaimpson.github.io/beer-final-project/dist/index.html">here</a></p>
                <h1>The Code:</h1>
                <div>HTML5</div>
                <div>SCSS</div>
                <div>Bootstrap</div>
                <div>JavaScript</div>
                <div>jQuery</div>
                <div>Underscore.js</div>
                <div>Node.js</div>
                <div>Backbone.js</div>
                <div>React.js</div>
                <h1>The Server:</h1>
                <div>Parse</div>
                <h1>The Backend:</h1>
                <div>Heroku</div>
              </div>
            </div>
            <div className="drinkup-picture">
              <div className="col-xs-12 col-md-6">
                <img src="images/drinkUp-snap.png" alt="" className="drinkup-pic"/>
              </div>
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

module.exports = DrinkUp;
