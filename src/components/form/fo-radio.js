import { html, render } from "lit-html";

/**
 * @element fo-radio
 *
 * @attr {string} [class]
 */
class FormRadio extends HTMLElement {
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

customElements.define("fo-radio", FormRadio);
