var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
require('backbone-react-component');

var Home = React.createClass({
  drinkToggle: function(){
    Backbone.history.navigate('drinkUp', {trigger: true});
  },
  gitHubToggle: function(){
    Backbone.history.navigate('gitHub', {trigger: true});
  },
  surfToggle: function(){
    Backbone.history.navigate('surfAndPaddle', {trigger: true});
  },
  swampRabbitToggle: function(){
    Backbone.history.navigate('swampRabbit', {trigger: true});
  },
  render: function(){
    return (
      <div>

        <div>
            <Header/>
        </div>



        <div className="home">

            <div className="home__projects-block">
              {/*<h1 className="home__title">Drink Up</h1>*/}
              <a onClick={this.drinkToggle}>
                <img src="images/drinkup.png" alt=""  className="home__icon"/>
              </a>
            </div>

            <div className="home__projects-block">
              {/*<h1 className="home__title">GitHub</h1>*/}
              <a onClick={this.gitHubToggle}>
                <img src="images/github.png" alt=""  className="home__icon"/>
              </a>
            </div>

            <div className="home__projects-block">
              {/*<h1 className="home__title">Surf &amp; Paddle</h1>*/}
              <a onClick={this.surfToggle}>
                <img src="images/surfpaddle.png" alt=""  className="home__icon"/>
              </a>
            </div>

            <div className="home__projects-block">
              {/*<h1 className="home__title">Swamp Rabbit Cycling</h1>*/}
              <a onClick={this.swampRabbitToggle}>
                <img src="images/bike.png" alt="" className="home__icon"/>
              </a>
            </div>

        </div>

        <div>
            <Footer/>
        </div>



      </div>
    );
  }
});

module.exports = Home;
