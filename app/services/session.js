import Ember from 'ember';

const { computed, inject: { service } } = Ember;

const COOKIE_NAME = 'session-token';

export default Ember.Service.extend({
  cookies: service(),

  isAuthenticated: computed.notEmpty('token'),

  token: computed({
    get() {
      return this.get('cookies').read(COOKIE_NAME);
    },
    set(_, value) {
      this.get('cookies').write(COOKIE_NAME, value);
      return value;
    }
  })
});
