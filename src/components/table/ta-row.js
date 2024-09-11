import { html, render } from "lit-html";

/**
 * @element ta-row
 *
 * @attr {string} [class]
 */
class TableRow extends HTMLElement {
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

customElements.define("ta-row", TableRow);
