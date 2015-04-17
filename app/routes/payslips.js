import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        name: 'foo',
        val: 42
      },
      {
        name: 'bar',
        val: 43
      }
    ];
  },

  setupController: function(controller, model) {
    controller.set('attrs.lineitems', model);
  }
});
