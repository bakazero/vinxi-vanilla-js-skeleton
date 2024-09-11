import { html, render } from "lit-html";

/**
 * @element fo-checkbox
 *
 * @attr {string} [class]
 */
class FormCheckbox extends HTMLElement {
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

customElements.define("fo-checkbox", FormCheckbox);
