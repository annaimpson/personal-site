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

        <div>
            <Header/>
        </div>

        <div className="project">

                <h1 className="project__title">That time I made something that combined all my skills</h1>

                <div className="project__project-info">
                  <div className="project__about">
                    <h1 className="project__sub-title">Purpose: </h1>
                    <p className="project__description">Use what you know. Also, have a log-in, API, information stored in Parse, and ability to upload photos.</p>

                    <h1 className="project__sub-title">Description: </h1>
                    <p className="project__description">I created this application for several reasons, I love beer, I wanted to challenge myself, and I wanted something that worked well and looked great.
                      Drink Up was created for those who also like beer. It allows the user to create a profile,
                      search for beer types, flavor profiles, and breweries. In addition, the user can save specific beer to their profile to refer to later. </p>
                  </div>

                    <div className="project__links">
                      <h6 className="project__view">View the code <a href="https://github.com/annaimpson/beer-final-project">here</a></h6>
                      <h6 className="project__view">View the live site <a href="http://annaimpson.github.io/beer-final-project/dist/index.html">here</a></h6>
                    </div>
                  </div>

                <a href="http://annaimpson.github.io/beer-final-project/dist/index.html"><img src="images/drinkUp-snap.png" alt="" className="project__mockup"/></a>


                <h1 className="project__sub-title">The Code:</h1>
                <ul className="project__code">
                  <li>HTML5</li>
                  <li>SCSS</li>
                  <li>Bootstrap</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>Underscore.js</li>
                  <li>Node.js</li>
                  <li>Backbone.js</li>
                  <li>React.js</li>
                </ul>

                <h1 className="project__sub-title">The Server:</h1>
                <div className="project__code">Parse</div>

                <h1 className="project__sub-title">The Backend:</h1>
                <div className="project__code">Heroku</div>

        </div>

        <div>
            <Footer/>
        </div>


      </div>
    );
  }
});

module.exports = DrinkUp;
