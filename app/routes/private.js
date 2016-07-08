import Ember from 'ember';
import config from '../config/environment';

const { inject: { service } } = Ember;

export default Ember.Route.extend({
  session: service(),
  fastboot: service(),
  cookies: service(),
  ajax: service(),

  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
  },

  model() {
    let options = {};
    if (this.get('fastboot.isFastBoot')) {
      let token = this.get('cookies').read('token');
      options.headers = {
        'Cookie': `token=${token}`
      };
    } else {
      options.xhrFields = {
        crossDomain: true,
        withCredentials: true
      };
    }

    return this.get('ajax').request(`${config.apiHost}/private-data`, options).then((response) => {
      return response['private-data'];
    });
  }
});
