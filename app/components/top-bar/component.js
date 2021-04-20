import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TopBarComponent extends Component {
  isActiveToggle = false;

  constructor() {
    super(...arguments);
  }

  @action
  toggle() {
    if (this.isActiveToggle === true) {
      this.isActiveToggle = false;
      document.getElementById('sidebarMenu').style.maxWidth = '280px';
      document.getElementById('main-content').style.marginLeft = '280px';
    } else {
      this.isActiveToggle = true;
      document.getElementById('sidebarMenu').style.maxWidth = '0';
      document.getElementById('main-content').style.marginLeft = '0';
    }
  }
}
