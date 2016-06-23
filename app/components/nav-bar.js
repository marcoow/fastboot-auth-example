import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Component.extend({
  session: service(),

  actions: {
    logout() {
      this.set('session.token', null);
      this.getAttr('on-logout')();
    }
  }
});
