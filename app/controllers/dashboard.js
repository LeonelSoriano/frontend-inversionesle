import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DashboardController extends Controller {
  @tracked viewState = null;

  constructor() {
    super(...arguments);
    this.viewState = localStorage.getItem('dashboard:view');
  }

  @action
  setView(view) {
    localStorage.setItem('dashboard:view', view);
    this.viewState = view;
  }
}
