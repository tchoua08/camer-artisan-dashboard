import {Service} from './service.model';

export class ServiceStandard extends Service {
  id: string;


  constructor(service:Service, obj: ServiceStandard | any = {}) {

      super(service);
      this.id = obj.id || '';


  }
}
