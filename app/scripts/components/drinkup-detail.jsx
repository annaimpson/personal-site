var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var Carousel = require('react-bootstrap').Carousel;
var Header = require('./header.jsx');
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
            <div className="col-md-12 drinkup-info">
              <div className="col-xs-12 col-md-6">
                <h1 className="drinkup-heading">That time I made something that combined all my skills</h1>
                <h1 className="purpose">Purpose: </h1>
                <p>Use what you know. Also, have a log-in, API, information stored in Parse, and ability to upload photos.</p>
                <h1>Description: </h1>
                <p>I created this application for several reasons, I love beer, I wanted to challenge myself, and I wanted something that worked well and looked great.
                  Drink Up was created for those who also like beer. It allows the user to create a profile,
                  search for beer types, flavor profiles, and breweries. In addition, the user can save specific beer to their profile to refer to later. </p>
                <p>View the code <a href="https://github.com/annaimpson/beer-final-project">here</a></p>
                <p>View the live site <a href="http://annaimpson.github.io/beer-final-project/dist/index.html">here</a></p>
              </div>
              <div className="col-xs-12 col-md-6">
                <a href="http://annaimpson.github.io/beer-final-project/dist/index.html"><img src="images/drinkUp-snap.png" alt="" className="drinkup-pic"/></a>
              </div>
            </div>
            <div className="col-xs-12 col-md-12">
              <div className="col-xs-12 col-md-4 the-code">
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
              </div>
              <div className="col-xs-12 col-md-4 the-server">
                <h1>The Server:</h1>
                <div>Parse</div>
              </div>
              <div className="col-xs-12 col-md-4 the-backend">
                <h1>The Backend:</h1>
                <div>Heroku</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DrinkUp;
