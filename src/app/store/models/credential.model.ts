export class Credential {
  email: string;
  password: string;

  constructor(obj:Credential | any = {}) {
    this.email = obj.email || '';
    this.password = obj.password || '';

  }
}
