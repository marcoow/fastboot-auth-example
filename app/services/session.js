import Ember from 'ember';

const { computed, inject: { service } } = Ember;

const COOKIE_NAME = 'has-session';

export default Ember.Service.extend({
  cookies: service(),

  isAuthenticated: computed({
    get() {
      return this.get('cookies').read(COOKIE_NAME) === 'true';
    },
    set(_, value) {
      this.get('cookies').write(COOKIE_NAME, value);
      return value;
    }
  })
});
