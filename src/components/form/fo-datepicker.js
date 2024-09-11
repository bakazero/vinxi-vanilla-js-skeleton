import { html, render } from "lit-html";

/**
 * @element fo-datepicker
 *
 * @attr {string} [class]
 */
class FormDatepicker extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.renderTemplate();
  }

  renderTemplate() {
    render(html``, this);
  }
}

customElements.define("fo-datepicker", FormDatepicker);
