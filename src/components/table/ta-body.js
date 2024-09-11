import { html, render } from "lit-html";

/**
 * @element ta-body
 *
 * @attr {string} [class]
 */
class TableBody extends HTMLElement {
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

customElements.define("ta-body", TableBody);
