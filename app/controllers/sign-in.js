import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SignInController extends Controller {
  @service auth;
  @service router;
  @service notify;
  @service store;

  @tracked password = '';
  @tracked email = '';
  @tracked remember = false;

  constructor() {
    super(...arguments);
  }

  _login() {
    this.auth.login(this.email, this.password, this.remember, (msg, err) => {
      if (msg === 'login successfully') {
        //transition.transitionTo
        this.router.transitionTo('dashboard');
      } else {
        if (msg !== null) {
          this.notify.error(msg);
        } else {
          this.notify.error(err);
        }
      }
    });
  }

  @action
  login(event) {
    event.preventDefault();
    event.stopPropagation();
    const forms = document.querySelectorAll('.validate-login');
    Array.prototype.slice.call(forms).forEach((form) => {
      form.checkValidity()
        ? this._login()
        : form.classList.add('was-validated');
    });
  }
}
