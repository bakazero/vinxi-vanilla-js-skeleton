import { html, render } from "lit-html";

/**
 * @element ta-pagination
 *
 * @attr {string} [class]
 */
class TablePagination extends HTMLElement {
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

customElements.define("ta-pagination", TablePagination);
