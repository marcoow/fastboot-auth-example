import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Component.extend({
  session: service(),

  actions: {
    logout() {
      this.set('session.isAuthenticated', false);
      this.getAttr('on-logout')();
    }
  }
});
