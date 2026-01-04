export default class Item {
  name: string;
  description: string;
  value: number;

  constructor(name: string, description: string, value: number) {
    this.name = name;
    this.description = description;
    this.value = value;
  }
}