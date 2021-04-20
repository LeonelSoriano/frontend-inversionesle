import RestAdapter from '@ember-data/adapter/rest';
import config from 'frontend-inversionesle/config/environment';
import { inject as service } from '@ember/service';

export default class BackendAdapter extends RestAdapter {
  @service router;
  @service auth;
  @service notify;

  namespace = 'api';
  host = config.APP.endPointBackend;
  headers = {
    Authorization: this.auth.getToken(),
  };

  constructor() {
    super(...arguments);
  }

  buildURL(modelName, id, snapshot, requestType, query) {
      //id = null;

    if (modelName === 'user' && requestType === 'findAll') {
      return `${config.APP.endPointBackend}/${this.namespace}/user`;
    }
    return `${super.buildURL(modelName, id, snapshot, requestType, query)}`;
  }

  ajax(url, type, hash) {
    this.headers.Authorization = this.auth.getToken();
    return super.ajax(url, type, hash);
  }

  handleResponse(status, headers, payload) {
    if (status === 401) {
      this.router.transitionTo('sign-in');
      this.notify.error('Session Invalida');
      return;
    } else {
      return payload;
    }
  }

    updateRecord(store, type, snapshot) {
        console.log("PUT");
        return super.updateRecord(store, type, snapshot);
    }

}

