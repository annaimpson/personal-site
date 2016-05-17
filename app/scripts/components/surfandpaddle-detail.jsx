var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var Header = require('./header.jsx');
require('backbone-react-component');

var SurfAndPaddle = React.createClass({
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
            <div className="col-md-12 surfandpaddle-info">
              <div className="col-xs-12 col-md-6">
                <h1 className="surfandpaddle-heading">That time I made a pixel perfect rendition</h1>
                <h1 className="surfandpaddle-purpose">Purpose: </h1>
                <p>Refine newly established skills in HTML and CSS.</p>
                <h1>Description: </h1>
                <p>Surf and Paddle is a static but detailed application which I made pixel perfect.</p>
                <p>View the original <a href="images/surf-and-paddle-1 copy.png">here</a></p>
                <p>View the code <a href="https://github.com/annaimpson/surfandpaddle">here</a></p>
                <p>View the live site <a href="http://annaimpson.github.io/surfandpaddle/dist/index.html">here</a></p>
              </div>
              <div className="col-xs-12 col-md-6">
                <a href="http://annaimpson.github.io/surfandpaddle/dist/index.html"><img src="images/surfandpaddleheader.png" alt="" className="surfandpaddle-pic"/></a>
              </div>
            </div>
            <div className="col-xs-12 col-md-12">
              <div className="col-xs-12 col-md-4 the-code">
                <h1>The Code:</h1>
                <div>HTML5</div>
                <div>CSS</div>
                <div>Bootstrap</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SurfAndPaddle;
