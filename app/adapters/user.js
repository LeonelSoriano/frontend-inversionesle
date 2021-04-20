import ApplicationAdapter from './application';
import config from 'frontend-inversionesle/config/environment';

export default class UserAdapter extends ApplicationAdapter {

  buildURL(modelName, id, snapshot, requestType, query) {
    //id = null;

    if (modelName === 'user' && requestType === 'updateRecord') {
      return `${config.APP.endPointBackend}/${this.namespace}/user`;
    }
    return `${super.buildURL(modelName, id, snapshot, requestType, query)}`;
  }
}
