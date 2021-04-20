import RESTSerializer from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (primaryModelClass.modelName === 'user' && requestType === 'findAll') {
      payload = { user: [payload.data]};
    }
    return super.normalizeResponse(store, primaryModelClass, payload, id, requestType);
  }

}
