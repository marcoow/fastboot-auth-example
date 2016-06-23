import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    onLogout() {
      this.transitionToRoute('index');
    }
  }
});
