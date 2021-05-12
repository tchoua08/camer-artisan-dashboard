export class FileUpload {
  key: string;
  name: string;
  url: string;
  file: File;

  constructor(obj:FileUpload | any = {}) {

    this.key = obj.key || '';
    this.name = obj.name || '';
    this.url = obj.url || '';
    this.file = obj.file || null;

 }
}
