import Ember from 'ember';

const { computed, inject: { service } } = Ember;

const COOKIE_REGEXP = 'session-token';

export default Ember.Service.extend({
  cookies: service(),

  isAuthenticated: computed.notEmpty('token'),

  token: computed({
    get() {
      return this.get('cookies').read(COOKIE_REGEXP);
    },
    set(_, value) {
      this.get('cookies').write(COOKIE_REGEXP, value);
      return value;
    }
  })
});
