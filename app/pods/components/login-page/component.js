import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate() {
      const { email, password } = this.getProperties('email', 'password');
      this.get('session').authenticate('authenticator:oauth2', email, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    },
    closeMessage() {
      this.set('errorMessage', null);
    }
  },

  reset() {
    this.setProperties({
      errorMessage: null,
      email: null,
      password: null
    });
  }
});
