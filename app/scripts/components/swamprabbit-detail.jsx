var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
require('backbone-react-component');

var SwampRabbit = React.createClass({
  render: function(){
    return (
      <div>

        <div>
            <Header/>
        </div>

            <div className="swamp-rabbit">

                    <h1 className="swamp-rabbit__title">That time I made something responsive</h1>

                    <div className="swamp-rabbit__project-info">
                      <div className="swamp-rabbit__about">
                        <h1 className="swamp-rabbit__sub-title">Purpose: </h1>
                        <p className="swamp-rabbit__description">Create a site that was responsive on all devices</p>

                        <h1 className="swamp-rabbit__sub-title">Description: </h1>
                        <p className="swamp-rabbit__description">I was provided with a wireframe which I made responsive using the Bootstrap grid system</p>
                      </div>

                      <div className="swamp-rabbit__links">
                        <h6 className="swamp-rabbit__view">View the code <a href="https://github.com/annaimpson/responsive-site/tree/master">here</a></h6>
                        <h6 className="swamp-rabbit__view">View the live site <a href="http://annaimpson.github.io/responsive-site/dist/index.html">here</a></h6>
                      </div>
                    </div>

                    <a href="http://annaimpson.github.io/responsive-site/dist/index.html"><img src="images/responsive.png" alt="" className="swamp-rabbit__mockup"/></a>

                    <h1 className="swamp-rabbit__sub-title">The Code:</h1>
                    <ul className="swamp-rabbit__code">
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

module.exports = SwampRabbit;
