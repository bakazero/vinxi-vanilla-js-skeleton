import { html, render } from "lit-html";

/**
 * @element ta-table
 *
 * @attr {string} [class]
 */
class TableTable extends HTMLElement {
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

customElements.define("ta-table", TableTable);
