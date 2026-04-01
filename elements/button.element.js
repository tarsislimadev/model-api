import { HTML } from '../libs/afrontend/index.js';

export class ButtonElement extends HTML {
  constructor({ text = 'button', onclick = () => { } } = {}) {
    super()
    this.setText(text)
    this.addEventListener('click', onclick)
  }

  getTagName() { return 'button' }
}
