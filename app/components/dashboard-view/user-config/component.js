import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from '../../../config/environment';
import Img from '../../../until/img';

export default class DashboardViewUserConfigComponent extends Component {
  @service store;

  @service auth;

  @tracked model;
  @tracked birthday;
  @tracked userImagen;
  gender;

  //ENV.APP.IMAGEN_NOT_FOUND
  constructor() {
    super(...arguments);
    this.store.findAll('user').then((users) => {
      users.forEach((user) => {
        document.getElementsByClassName('container-upper')[0].style.display =
          'none';
        this.name = user.name;
        this.model = user;
        this.birthday = this._deszerializeDate(user.birthday);

        this.userImagen = ENV.APP.IMAGEN_NOT_FOUND;

        new Img().findUserImg(this.auth.getToken(), (img) => {
          this.userImagen = img;
        });
      });
    });
  }

  _deszerializeDate(dt) {
    const date = new Date(dt);
    return ('0' + (date.getMonth()+1)).slice(-2) + '/'
             + ('0' + date.getDate()).slice(-2)  + '/'
             + date.getFullYear();
  }

  @action
  uploadImg(event) {
    //console.log(event.target.files[0].name);
    console.log(ENV.APP.endPointBackend + ENV.APP.URL_LOAD_USER_IMG)
    fetch(ENV.APP.endPointBackend + ENV.APP.URL_LOAD_USER_IMG, {
      body: event.target.files[0],
      headers: {
        Authorization: this.auth.getToken(),
        'Content-Type': 'text/plain',
      },
      method: 'POST',
    }).then((msg) => {
      new Img().findUserImg(this.auth.getToken(), (img) => {
        this.userImagen = img;
        document.getElementById('user-avatar').src = img;
      });

      console.log(msg);
    });
  }

  @action
  updateUser(event) {
    document.getElementsByClassName('container-upper')[0].style.display =
      'block';
    event.preventDefault();
    event.stopPropagation();
    this.model.birthday = this.birthday;
    this.model.birthday = new Date(this.birthday);
    this.model
      .save()
      .then(() => {
        document.getElementsByClassName('container-upper')[0].style.display =
          'none';
      })
      .catch(() => {
        document.getElementsByClassName('container-upper')[0].style.display =
          'block';
      });
  }

  @action
  onChangeGender(select) {
    // console.log(select.target.value);
    // console.log(select.target.options[select.target.options.selectedIndex].text);
    if (select.target.value === '1') {
      this.gender = false;
    } else if (select.target.value === '2') {
      this.store.gender = true;
    } else {
      this.store.gender = null;
    }
  }
}
