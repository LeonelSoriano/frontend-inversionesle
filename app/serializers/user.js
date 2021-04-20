import ApplicationSerializer from './application';
import { decamelize } from '@ember/string';
import { assign } from '@ember/polyfills';

export default class UserSerializer extends ApplicationSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (requestType === 'findAll') {
      payload.data.addressNumber = payload.data.address_number;
      delete payload.data.address_number;
    }
    return super.normalizeResponse(store, primaryModelClass, payload, id, requestType);
  }

  normalizeQueryResponse(store, ModelClass, payload, id, requestName) {
    return super.normalizeQueryResponse(store, ModelClass, payload.messages, id, requestName);
  }

  serialize(snapshot, options) {
    const attributes = snapshot.attributes();
    attributes.address_number = attributes.addressNumber;
    delete attributes.addressNumber;

    attributes.birthday = attributes.birthday.toISOString().split('.')[0];
    return attributes;
  }

  serializeAttribute(...args) {}

  serializeIntoHash(hash, type, record, options) {
    assign(hash, this.serialize(record, options));
  }
}
