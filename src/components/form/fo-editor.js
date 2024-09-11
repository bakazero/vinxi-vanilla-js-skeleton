import { html, render } from "lit-html";

/**
 * @element fo-editor
 *
 * @attr {string} [class]
 */
class FormEditor extends HTMLElement {
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

customElements.define("fo-editor", FormEditor);
