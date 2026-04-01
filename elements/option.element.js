import { HTML } from '../libs/afrontend/index.js';

export class OptionElement extends HTML {
  constructor({ value, text }) {
    super();
    this.value = value;
    this.text = text;
  }

  getTagName() { return 'option' }
}
