import { HTML } from '../libs/afrontend/index.js';
import { SelectElement } from '../elements/select.element.js';

export class SelectComponent extends HTML {
  label = new HTML()
  input = new SelectElement({ options: [] })
  error = new HTML()

  constructor({ label, options }) {
    super()
    this.label.setText(label)
    this.input.setOptions(options)
  }
}
