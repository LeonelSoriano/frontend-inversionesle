import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
    constructor(){
        super(...arguments);
    }

    beforeModel(transition) {
      }
  
}
