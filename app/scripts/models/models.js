
var Backbone = require('backbone');
var $ = require('jquery');

PortfolioModel = Backbone.Model.extend({});

PortfolioCollection = Backbone.Collection.extend({
  model: PortfolioModel
});

module.exports = {
  'PortfolioModel': PortfolioModel,
  'PortfolioCollection': PortfolioCollection
};
