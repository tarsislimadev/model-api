import { HTML } from './libs/afrontend/index.js';
import { SelectElement } from './select.component.js';
import { InputsComponent } from './inputs.component.js';
import { ButtonElement } from '../elements/button.element.js';

export class FormElement extends HTML {
  endpoint_select = new SelectElement()
  inputs = new InputsComponent()
  send_button = new ButtonElement({ text: 'Send', onclick: () => this.send() })

  onCreate() {
    this.append(this.getEndpointSelectComponent())
    this.append(this.getInputsComponent())
    this.append(this.getSendButtonComponent())
  }

  getEndpointSelectComponent() {
    this.endpoint_select.addEventListener('change', () => {
      this.inputs.setEndpoint(this.endpoint_select.getValue())
    })
    return this.endpoint_select
  }

  getInputsComponent() {
    return this.inputs
  }

  getSendButtonComponent() {
    return this.send_button
  }

  send() {
    const endpoint = this.endpoint_select.getValue()
    const inputs = this.inputs.getValues()
    this.dispatchEvent(new CustomEvent('message', { detail: { endpoint, inputs } }))
  }
}
