import { HTML } from '../libs/afrontend/index.js';

export class ColumnsElement extends HTML {
  constructor({ columns = [] } = {}) {
    super();
    this.setStyle('display', 'flex')
    columns.forEach(column => this.append(column))
  }
}
