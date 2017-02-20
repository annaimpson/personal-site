var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
require('backbone-react-component');

var SurfAndPaddle = React.createClass({
  render: function(){
    return (
      <div>

        <div>
            <Header/>
        </div>

        <div className="project">

                <h1 className="project__title">That time I made a pixel perfect rendition</h1>

                <div className="project__project-info">
                  <div className="project__about">
                    <h1 className="project__sub-title">Purpose: </h1>
                    <p className="project__description">Refine newly established skills in HTML and CSS.</p>
                    <h1 className="project__sub-title">Description: </h1>
                    <p className="project__description">Surf and Paddle is a static but detailed application which I made pixel perfect.</p>
                  </div>

                  <div className="project__links">
                    <h6 className="project__view">View the original <a href="images/surf-and-paddle-1 copy.png">here</a></h6>
                    <h6 className="project__view">View the code <a href="https://github.com/annaimpson/surfandpaddle">here</a></h6>
                    <h6 className="project__view">View the live site <a href="http://annaimpson.github.io/surfandpaddle/dist/index.html">here</a></h6>
                  </div>
                </div>

                <a href="http://annaimpson.github.io/surfandpaddle/dist/index.html"><img src="images/surfandpaddleheader.png" alt="" className="project__mockup"/></a>


                <h1 className="project__sub-title">The Code:</h1>
                <ul className="project__code">
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                </ul>

        </div>

        <div>
            <Footer/>
        </div>

      </div>
    );
  }
});

module.exports = SurfAndPaddle;
