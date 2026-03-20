export default class Item {
  name: string;
  description: string;
  value: number;
  _id: string;
  
  constructor(name: string, description: string, value: number) {
    this._id = crypto.randomUUID();
    this.name = name;
    this.description = description;
    this.value = value;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getValue() {
    return this.value;
  }

  getId() {
    return this._id;
  }
}