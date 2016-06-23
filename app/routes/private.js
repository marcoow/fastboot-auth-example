import Ember from 'ember';
import config from '../config/environment';

const { inject: { service } } = Ember;

export default Ember.Route.extend({
  session: service(),
  ajax: service(),

  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
  },

  model() {
    let token = this.get('session.token');

    return this.get('ajax').request(`${config.apiHost}/private-data`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    }).then((response) => {
      return response['private-data'];
    });
  }
});
