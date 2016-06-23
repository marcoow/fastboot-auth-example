import Ember from 'ember';
import config from '../config/environment';

const { inject: { service } } = Ember;

export default Ember.Controller.extend({
  ajax: service(),
  session: service(),

  actions: {
    login(e) {
      e.preventDefault();

      let { username, password } = this.getProperties('username', 'password');
      this.get('ajax').request(`${config.apiUrl}/token`, {
        method: 'POST',
        data: { username, password }
      }).then(({ token }) => {
        this.get('session').set('token', token);
        this.transitionToRoute('index');
      }).catch(() => {
        this.set('error', 'login failed');
      });
    }
  }
});
