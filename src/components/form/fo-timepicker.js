import { html, render } from "lit-html";

/**
 * @element fo-timepicker
 *
 * @attr {string} [class]
 */
class FormTimepicker extends HTMLElement {
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

customElements.define("fo-timepicker", FormTimepicker);
