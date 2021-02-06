export class SousDetail {
  id: string;
  element: string[];

  constructor(obj:SousDetail | any = {}) {
    this.element = obj.element || null;
    this.id = obj.id || '';

 
  }
}
