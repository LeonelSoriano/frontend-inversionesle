import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from '../../config/environment';
import Img from '../../until/img';

export default class TopBarUserManagerComponent extends Component {
  @service auth;
  @service router;

  @tracked username = this.auth.getUsername();

  @tracked photo = this.auth.getPhoto();

  constructor() {
    super(...arguments);
    this.photo = ENV.APP.IMAGEN_NOT_FOUND;

    new Img().findUserImg(this.auth.getToken(), (img) => {
      this.photo = img;
    });
  }

  @action
  logout() {
    this.auth.logout();
    this.router.transitionTo('sign-in');
  }
}
