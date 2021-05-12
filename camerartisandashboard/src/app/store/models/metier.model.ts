import {Task} from './task.model';

export class Metier {
  menu: string;
  sousmenu: Task[];

  constructor(obj:Metier | any = {}) {
    this.menu = obj.menu || '';
    this.sousmenu = new obj.sousmenu() || null;

  }
}
