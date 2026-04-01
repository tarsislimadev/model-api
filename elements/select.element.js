import { HTML } from '../libs/afrontend/index.js';
import { OptionElement } from '../elements/option.element.js';

export class SelectElement extends HTML {
  getTagName() { return 'select' }

  addOption(option = new OptionElement()) {
    this.append(option)
  }
}
