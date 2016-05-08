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
        <div className="container-fluid header">
          <div className="row">
            <Header/>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="surfandpaddle-info">
              <div className="col-xs-12 col-md-6">
                <h1>That Time I Made a Pixel Perfect Rendition</h1>
                <h1>Purpose: </h1>
                <p>Refine newly established skills</p>
                <h1>Description: </h1>
                <p>Surf and Paddle is a detailed application which we made pixel perfect.</p>
                <p>View the code <a href="https://github.com/annaimpson/surfandpaddle">here</a></p>
                <p>View the live site <a href="http://annaimpson.github.io/surfandpaddle/dist/index.html">here</a></p>
                <h1>The Code:</h1>
                <div>HTML5</div>
                <div>CSS</div>
              </div>
            </div>
            <div className="surfandpaddle-picture">
              <div className="col-xs-12 col-md-6">
                <img src="images/surfandpaddleheader.png" alt="" className="surfandpaddle-pic"/>
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

module.exports = SurfAndPaddle;
