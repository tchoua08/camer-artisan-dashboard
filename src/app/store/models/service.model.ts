export class Service {
  id: string;



  constructor(obj:Service | any = {}) {
    this.id = obj.id || '';


  }
}
