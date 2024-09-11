import { html, render } from "lit-html";

/**
 * @element ta-cell
 *
 * @attr {string} [class]
 */
class TableCell extends HTMLElement {
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

customElements.define("ta-cell", TableCell);
