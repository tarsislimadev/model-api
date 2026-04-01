import { HTML } from './libs/afrontend/index.js';
import { ColumnsElement } from './elements/columns.element.js';
import { FormElement } from './elements/form.element.js';
import { MessagesElement } from './elements/messages.element.js';

export class Page extends HTML {
  left = new FormElement()
  right = new MessagesElement()

  onCreate() {
    this.append(new ColumnsElement({
      columns: [this.getLeftBarelement(), this.getRightBarelement(),]
    }))
  }

  getLeftBarelement() {
    this.left.addEventListener('message', () => {})
    return this.left
  }

  getRightBarelement() {
    this.right.addEventListener('message', () => {})
    return this.right
  }
}
